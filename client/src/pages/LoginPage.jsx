import { useState, useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthContext.jsx';
import { register, emailLogin, googleLogin } from '../services/authService.js';
import '../styles/login.css';

function LoginPage() {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // If user is already logged in, redirect to home
  if (user) return <Navigate to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!email || !password) return toast.error('Please fill in all fields.');
    if (isSignUp && !name) return toast.error('Please enter your name.');
    if (password.length < 6)
      return toast.error('Password must be at least 6 characters.');

    setLoading(true);
    try {
      const result = isSignUp
        ? await register(name, email, password)
        : await emailLogin(email, password);

      login(result.token, result.user);
      toast.success(
        isSignUp
          ? `Welcome, ${result.user.name}!`
          : `Welcome back, ${result.user.name}!`
      );
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const result = await googleLogin(credentialResponse.credential);
      login(result.token, result.user);
      toast.success(`Welcome, ${result.user.name}!`);
      navigate('/');
    } catch {
      toast.error('Login failed. Please try again.');
    }
  };

  const toggleMode = () => {
    setIsSignUp((prev) => !prev);
    // Clear fields when switching modes
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">{isSignUp ? 'Create Account' : 'Welcome Back'}</h1>
        <p className="login-subtitle">
          {isSignUp
            ? 'Sign up to get started'
            : 'Sign in to continue'}
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          <button type="submit" className="login-submit-btn" disabled={loading}>
            {loading ? 'Please wait...' : isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <div className="login-divider">
          <span>OR</span>
        </div>

        <div className="google-login-wrapper">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => toast.error('Google login failed.')}
            theme="outline"
            shape="rectangular"
            size="large"
            text="continue_with"
            width="300"
          />
        </div>

        <p className="login-toggle-text">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button type="button" className="login-toggle-btn" onClick={toggleMode}>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
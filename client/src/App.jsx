import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import "./styles/components.css";

function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <div
                style={{
                  color: "#fff",
                  textAlign: "center",
                  marginTop: "4rem",
                }}
              >
                <h1>Welcome to CodeTranslator!</h1>
                <p>The code editor and AI features are coming in Part 2.</p>
              </div>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
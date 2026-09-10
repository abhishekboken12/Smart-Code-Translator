
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      unique: true,
      sparse: true
    },

    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true
    },

    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true
    },

    password: {
      type: String,
      required: true,
      minlength: 6
    },

    picture: {
      type: String,
      default: ""
    },

    lastLogin: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

export default User;


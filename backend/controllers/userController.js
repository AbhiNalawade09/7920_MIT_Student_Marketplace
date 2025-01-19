import { User } from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Middleware to authenticate users
const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Access denied. No token provided." });

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add user data from token to the request object
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid or expired token." });
  }
};

// Login a user
 // User login (Authentication)
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Compare the password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful.", token });
  } catch (err) {
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

//logout a user
export const logoutUser = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(400).json({ error: "No token provided." });
    }

    // Blacklist the token
    blacklistToken(token);

    res.status(200).json({ message: "Logged out successfully." });
  } catch (err) {
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};


// Create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate inputs
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email, and password are required." });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already in use." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ message: "User created successfully.", token });
  } catch (err) {
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

// Get all users (Protected route)
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude passwords from the response
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

// Get a user by email (Protected route)
export const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    const user = await User.findOne({ email }, "-password"); // Exclude password from the response

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

// Update a user by email (Protected route)
export const updateUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    const user = await User.findOneAndUpdate({ email }, req.body, { new: true, runValidators: true });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "User updated successfully.", user });
  } catch (err) {
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

// Delete a user by email (Protected route)
export const deleteUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    const user = await User.findOneAndDelete({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "User deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

// Middleware usage example (for protected routes)
export const exampleProtectedRoute = [
  authenticateUser,
  async (req, res) => {
    res.status(200).json({ message: "You have accessed a protected route!", user: req.user });
  },
];


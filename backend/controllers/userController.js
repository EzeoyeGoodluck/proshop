import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(email);

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // set jwT as HTTP Only cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 1000, // 30 days
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
    console.log(email);
  }

  res.send("auth user");
});

// @desc  Register user
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
}else{
    res.status(400);
    throw new Error('Invalid user data');
}
});




// @desc  Logout user
// @route POST /api/products
// @access Private

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out succesfully" });
});

// @desc  Update user profile
// @route GET /api/products
// @access Public

const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc  Update user profile
// @route GET /api/users
// @access Public/Admin

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user Profile");
});

// @desc  GET users
// @route GET /api/users
// @access Private/Admin

const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// @desc  GET user by ID
// @route GET /api/users/
// @access Private/Admin

const getUserByID = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// @desc  Delete user
// @route DELETE /api/users/:id
// @access Private/Admin

const deleteUsers = asyncHandler(async (req, res) => {
  res.send("delete users");
});

// @desc  update user
// @route PUT /api/users/:id
// @access Private/Admin

const updateUser = asyncHandler(async (req, res) => {
  res.send("update users");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUsers,
  getUserByID,
  updateUser,
};

import asyncHandler from "../middleware/asyncHandler.js"
import User from "../models/userModel.js";


// @desc Auth user & get token
// @route POST /api/products
// @access Public

const  authUser = asyncHandler(async (req, res) => {
    res.send('auth user');
});


// @desc  Register user
// @route POST /api/products
// @access Public

const  registerUser = asyncHandler(async (req, res) => {
    res.send('register user');
});



// @desc  Logout user
// @route POST /api/products
// @access Private

const  logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user');
});




// @desc  Update user profile
// @route GET /api/products
// @access Public

const  getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile');
});



// @desc  Update user profile
// @route GET /api/users
// @access Public/Admin

const  updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user Profile');
});



// @desc  GET users
// @route GET /api/users
// @access Private/Admin

const  getUsers = asyncHandler(async (req, res) => {
    res.send('get users');
});



// @desc  GET user by ID
// @route GET /api/users/
// @access Private/Admin

const  getUserByID = asyncHandler(async (req, res) => {
    res.send('get user by id');
});



// @desc  Delete user 
// @route DELETE /api/users/:id
// @access Private/Admin

const  deleteUsers = asyncHandler(async (req, res) => {
    res.send('delete users');
});


// @desc  update user 
// @route PUT /api/users/:id
// @access Private/Admin

const  updateUser = asyncHandler(async (req, res) => {
    res.send('update users');
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
}






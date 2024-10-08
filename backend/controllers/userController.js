const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/User");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  //Try to log the user in
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token, message: "Succesfully logged in" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signUpUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token, message: "Successfully signed in" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {loginUser, signUpUser};
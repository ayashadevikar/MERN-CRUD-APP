import User from "../models/user.schema.js";

export const home = (req, res) => {
  res.send("Hello from Backend");
};

export const createUser = async (req, res) => {
  try {
    // Extracting name and email from body
    const { name, email, address } = req.body;

    if (!name || !email) {
      throw new Error("Name and Email are required");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new Error("Email already exists");
    }

    const user = await User.create({
      name,
      email,
      address
    });

    res.status(200).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndDelete(userId);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

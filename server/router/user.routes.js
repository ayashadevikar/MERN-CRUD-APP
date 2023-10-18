import express from 'express';
const router = express.Router();
import {
  
  createUser,
  getUsers,
  deleteUser,
  editUser,
  home,
  getUsersById
} from "../controller/user.controller.js";



router.get("/", home)
router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.get("/getUsersById/:id", getUsersById)
router.put("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);

export default router;

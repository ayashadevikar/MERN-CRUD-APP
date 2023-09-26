import express from 'express';
const router = express.Router();
import {
  
  createUser,
  getUsers,
  deleteUser,
  editUser,
  home
} from "../controller/user.controller.js";



router.get("/", home)
router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.put("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);

export default router;

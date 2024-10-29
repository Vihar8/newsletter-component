import express from "express";
import { getUsers, createUsers, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

// No need to prefix /users here, as it's already prefixed in the main app file
router.get("/", getUsers);
router.post("/", createUsers);
router.get("/user/:id", getUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser); // Use router.put or router.patch

export default router;

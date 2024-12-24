import express from "express";
import { logout } from "../controllers/user.controller.js";

const router = express.Router();

// Logout Route
router.get("/logout", logout);

export default router;

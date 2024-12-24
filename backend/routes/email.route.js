import express from "express";
import { createEmail, getAllEmailById, deleteEmail } from "../controllers/emai.controller.js";
import isAuthenticated from '../middleware/isAuthenticated.js'
const router = express.Router();

router.route("/create").post(isAuthenticated, createEmail);// Create and Get all Emails
router.route("/:id").delete(isAuthenticated,deleteEmail);
router.route("/getallemails").get(isAuthenticated,getAllEmailById);  // Delete Email by ID

export default router;

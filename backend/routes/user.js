import express from "express";
const router = express.Router();

import { getUser } from "../controllers/user.js";

router.get('/', getUser);
// router.post("/login", login);


export default router;

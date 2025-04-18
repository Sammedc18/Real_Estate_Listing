import express from 'express';
import { createUser } from '../controllers/usercontr.js';

const router = express.Router();

router.post("/register", createUser);

export { router as userRoute };

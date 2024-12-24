import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoute from './routes/user.route.js'; // Correct import
import emailRoute from './routes/email.route.js'
import userRoutes from "./routes/userRoutes.js";
dotenv.config({});

connectDB();
const PORT = 8080;

const app = express();

// Middleware
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};
app.use(cors(corsOptions));

// Routes
app.use('/api/v1/user', userRoute);
app.use("/api/v1/email", emailRoute);
app.use("/api/user", userRoutes);
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});


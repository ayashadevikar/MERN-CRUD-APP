import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/dbConnection.js'
import userRouter from './router/user.routes.js'
import cors from "cors"

const app = express();

dotenv.config();
dbConnection();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true}));





app.use('/', userRouter)






export default app;


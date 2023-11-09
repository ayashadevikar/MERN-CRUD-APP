import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/dbConnection.js'
import userRouter from './router/user.routes.js'
import cors from "cors"

const app = express();

dotenv.config();
dbConnection();

app.use(cors(
    {
        origin: ["https://mern-crud-app-client.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json());

app.use(express.urlencoded({ extended: true}));





app.use('/', userRouter)






export default app;


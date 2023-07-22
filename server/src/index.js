import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

import {userRouter} from './routes/users.js';

const app = express();

// convert any type of any request to an json format
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

// generate a connection to our mongodb db
const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;

mongoose.connect(`mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@recipes.2se21ak.mongodb.net/recipes?retryWrites=true&w=majority`);



app.listen(3001, () => console.log('Server is Running on 3001')); 

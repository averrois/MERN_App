import express  from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";


const router = express.Router();

router.post("/register", async (req, res) => {
    const {username, password} = req.body;

    const user = await UserModel.findOne({username});

    if(user){
        return res.json({message: "User already exists!"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({username, password: hashedPassword});

    // Similar to Laravel
    await newUser.save();

    res.json({message: "The User Registerd successfully!"});
});
router.post("/login", async (req, res) => {
    const {username, password} = req.body;

    const user = await UserModel.findOne({username});

    if (!user) {
        return res.json({message: "User deosn't Exist!"});
    }
    
    // Check if the ps is correct
    const isPsCorrect = await bcrypt.compare(password, user.password);

    if (!isPsCorrect) {
        return res.json({message: "Username or Password is Incorrect!"});
    }

    const token = jwt.sign({id : user._id}, "secret");
    res.json({token, userID: user._id});

});


export {router as userRouter};

// Creating Middleware
export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, "secret", (err) => {
            if (err) return res.sendStatus(403);
            next();
        })
    } else {
        res.sendStatus(401);
    }
}
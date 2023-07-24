import express  from "express";
import { PostModel } from '../models/Posts.js';
import { UserModel } from "../models/Users.js";
// import mongoose from "mongoose";

const router = express.Router();

// This router if to get all of the posts (SELECT *)
router.get("/", async (req, res) => {
    try {
        const response = await PostModel.find({});
        res.json(response);
    } catch (error) {
        res.json(error);
    }
});


router.post("/", async (req, res) => {
    const post = new PostModel( req.body )
    try {
        const response = await post.save();
        res.json(response);
        console.log(post);
    } catch (error) {
        res.json(error);
    }
});

router.put("/", async (req, res) => {
    try {
        const post = await PostModel.findById(req.body.postID);
        const user = await UserModel.findById(req.body.userID);
        user.savedPosts.push(post);
        await user.save();
        res.json({savedPosts: user.savedPosts});
    } catch (error) {
        res.json(error);
    }
});

router.get("/savedPosts/ids/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);
        res.json({savedPosts: user?.savedPosts});
    } catch (error) {
        res.json(error);
    }
});

router.get("/savePosts/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);
        const savedPosts = await PostModel.find({
            _id: {$in: user.savedPosts},
        });
        res.json({savedPosts});
    } catch (error) {
        res.json(error)
    }
})


export {router as postRouter};
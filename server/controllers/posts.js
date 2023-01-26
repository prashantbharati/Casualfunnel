import express from "express";
import mongoose from "mongoose";

const router = express.Router();

export const getPosts = (req, res) => {
  res.send("This works");
};

export default router;

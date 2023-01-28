import express from "express";

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/", getPosts);
router.get("/:id", auth, getPost);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);

export default router;

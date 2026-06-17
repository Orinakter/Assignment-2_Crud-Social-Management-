import Router from "express";
import { postController } from "./post.controller";

const router = Router();

router.post("/",postController.createPost);
router.get("/",postController.getAllPost);
router.get("/:id",postController.getSinglePost);
router.patch("/:id",postController.updatePost);






export const postRouter = router;
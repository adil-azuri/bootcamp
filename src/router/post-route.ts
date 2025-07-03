import  express  from "express";
import { getPosts } from "../controller/post-controller";

const router = express.Router()
router.get("/products",getPosts)

export default router   

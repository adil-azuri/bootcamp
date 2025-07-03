import  express  from "express";
import {getPosts,createPosts, detailPosts,deletePosts} from "../controller/controller-posts"
import {getUser,createUser,userWithPosts} from "../controller/controller-user"

const router = express.Router()
export default router

router.get("/posts",getPosts)
router.post("/posts",createPosts)
router.get("/posts/:id",detailPosts)
router.delete("/posts/:id",deletePosts)

router.get("/users",getUser)
router.post("/users",createUser)
router.get('/users/:id', userWithPosts); 
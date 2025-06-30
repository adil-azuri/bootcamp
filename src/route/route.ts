import  express  from "express";
import { getBook } from "../controller/buku-controller";

const router = express.Router()
router.get("/books", getBook)

export default router
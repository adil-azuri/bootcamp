import express from "express";
import { getPoint, transferPoint } from "../controllers/user";

const router = express.Router()

router.post("/transfer-point", transferPoint)
router.get("/user-point/:id", getPoint)

export default router
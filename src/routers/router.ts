import express from "express";
import { getSupplier, updateStock } from "../controller/controller-supplier";

const router = express.Router()


router.post("/supplier/stock/", updateStock)
router.get("/supplier/stock/:id", getSupplier)

export default router
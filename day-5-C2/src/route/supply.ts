import express from "express";
import { getProduct, insertProduct, loginSupply, registerSupply } from "../controller/supply";
import { authenticate } from "../middlewares/supply";

const router = express.Router();

router.post("/register", registerSupply);
router.post("/login", loginSupply);

router.get("/products", getProduct);
router.post("/products/add", authenticate, insertProduct);


export default router;
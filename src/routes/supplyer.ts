// src/routes/auth.route.ts
import express from "express";
import { supplierRegister, SupplierLogin, uploadProducts } from "../controllers/supplier";
import { authproduct } from "../middlewares/authenticate";
import { uploads } from "../utility/multer";
import limiter from "../middlewares/rate-limit";

const router = express.Router();

router.post("/supplier/reg", supplierRegister);
router.post("/supplier/log", SupplierLogin);
router.post("/supplier/products", limiter, authproduct, uploads.single('picture'), uploadProducts);

router.get("/supplier/protect", limiter, authproduct, (req, res) => {
    res.json({ message: "Protected route product" });
});

export default router;
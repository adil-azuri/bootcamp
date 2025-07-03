// src/routes/auth.route.ts
import express from "express";
import { handleRegister, handleLogin, updateProfile } from "../controllers/user";
import { authenticate, authproduct } from "../middlewares/authenticate";
import { uploads } from "../utility/multer";
import limiter from "../middlewares/rate-limit";

const router = express.Router();

router.post("/register", uploads.single('profile'), handleRegister);
router.post("/login", handleLogin);
router.post("/update-profile", uploads.single('profile'), updateProfile);

router.get("/protect", limiter, authenticate, (req, res) => {
    res.json({ message: "Protected route" });
});

export default router;
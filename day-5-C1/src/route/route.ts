import express from "express";
import { handleLogin, handleRegister, updatePassword } from "../controller/auth-controller";
import { autentikasi } from "../middlewares/auth";

const router = express.Router();

router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.post("/update", autentikasi, updatePassword);

router.get("/user", autentikasi, (req, res) => {
    res.json({ message: "Protected route" });
});


export default router;
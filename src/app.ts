import express from "express";
import authRoute from "./routes/user";
import supplyRoute from "./routes/supplyer";

const app = express();
app.use(express.json());

app.use("/auth", authRoute);
app.use("/shop", supplyRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}✅`);
});
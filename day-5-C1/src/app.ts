import express from "express";
import router from "./route/route";

const app = express();
app.use(express.json());

app.use("/auth", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
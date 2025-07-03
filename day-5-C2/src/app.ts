import express from "express";
import router from "./route/supply";

const app = express();
app.use(express.json());

app.use("/supplier", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
import express from "express";
import router from "./routes/user";

const app = express()
app.use(express.json())

app.use((err: any, req: any, res: any, next: any) => {
    console.log(err);
    res.status(err.status || 500).json({ error: err.message || "internal server error" })
})


app.use("/api", router)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server Is Running on port = " + port);
})

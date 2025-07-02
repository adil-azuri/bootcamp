import express from "express";
import router from "./routers/router";
import { errorHandler } from "./middlewares/error-handler-middleware";

const app = express()
app.use(express.json())
app.use(errorHandler)


app.use("/api", router)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server Is Running on port = " + port);
})
import  express  from "express";
import  router  from "./route/route-social-media";

const app = express()
app.use(express.json())
app.use("/api",router)

app.listen(process.env.PORt, ()=>{
    console.log("SERVER IS RUNNING");

})
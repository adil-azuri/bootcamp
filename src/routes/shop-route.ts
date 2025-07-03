import  express  from "express";
import { getProducts } from "../controllers/product-controller";
import { getOrder,getOrderSummary } from "../controllers/order-controller";

const router = express.Router()
router.get("/products",getProducts)
router.get("/order",getOrder)
router.get("/order/summary",getOrderSummary)

export default router   

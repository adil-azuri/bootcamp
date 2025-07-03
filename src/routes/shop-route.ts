import  express  from "express";
import { getProduct, createProduct, deleteProduct, ProductDetail, updateProduct } from "../controllers/product-controller";
import { getOrder, createOrder, orderDetail, deleteOrder, updateOrder} from "../controllers/order-controller";

const router = express.Router()

router.get("/shop", getProduct)
router.get("/shop/:id", ProductDetail)
router.post("/shop", createProduct)
router.delete("/shop/:id", deleteProduct)
router.post("/shop/:id", updateProduct)

router.get("/order", getOrder)
router.post("/order", createOrder)
router.get("/order/:id", orderDetail)
router.delete("/order/:id", deleteOrder)
router.post("/order/:id", updateOrder)

export default router
import { RequestHandler } from "express";
import { orders,order } from "../models/order-model";


export const getOrder: RequestHandler = (req,res)=>{
 res.json(orders) 
}



export const createOrder : RequestHandler = (req, res)=>{
  let { orderName,orderPrice,lots} = req.body;
  console.log(orderName,orderPrice,lots);
  
  let newOrder : order = {
    id: orders.length+1,
    orderName:orderName,
    orderPrice:orderPrice,
    lots:lots   
  }
  orders.push(newOrder);
  res.status(201).json(newOrder)
}



export const orderDetail: RequestHandler = (req,res)=>{
  const id = parseInt (req.params.id);
  const index = orders.findIndex (type => type.id ===id)  
  let dataOrder = {
    id: orders[index].id,
    name: orders[index].orderName,
    price: orders[index].orderPrice,
    total: orders[index].lots
  };
  res.json(dataOrder)
}



export const deleteOrder : RequestHandler = (req, res)=>{
  const id = parseInt (req.params.id);
  
  const index = orders.findIndex (i => i.id ===id)  
  
  if (index === -1 ){
    res.status(404).json ({Message: "Order Not Found"})
    return;
  }
  
  const deletedOrder = orders.splice(index,1)[0]
  res.json({message:"Cancel Order Success", deletedOrder }) 
}



export const updateOrder: RequestHandler = (req, res) => {
  const id = parseInt(req.params.id);
  let { orderName,orderPrice,lots} = req.body;
  const index = orders.findIndex (i => i.id ===id)  
  
  let updateOrders = {
    id: orders[index].id,
    name: orderName,
    price: orderPrice,
    total: lots
  };
  
  orders[index] = updateOrders;
  res.json({message:"update Order Success", updateOrders })
}
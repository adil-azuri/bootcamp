import { RequestHandler } from "express";
import { products,types } from "../models/product-model";


export const getProduct: RequestHandler = (req,res)=>{
 res.json(products)
}


export const createProduct : RequestHandler = (req, res)=>{
  let { name,price,quantity} = req.body;
  let newProduct : types = {
    id: products.length+1,
    name:name,
    price:price,
    quantity:quantity
  }
  products.push(newProduct);
  res.status(201).json(newProduct)
}

export const ProductDetail: RequestHandler = (req,res)=>{
 const id = parseInt (req.params.id);
const index = products.findIndex (type => type.id ===id)  
  let data = {
        id: products [index] .id,
        name: products[index].name,
        price: products[index].price,
        stock: products[index].quantity
    };
 res.json(data)
}

export const deleteProduct : RequestHandler = (req, res)=>{
 const id = parseInt (req.params.id);
 
const index = products.findIndex (type => type.id ===id)  

 if (index === -1 ){
    res.status(404).json ({Message: "Product Not Found"})
    return;
}

 const deletedProduct = products.splice(index,1)[0]
 res.json({message:"Product Deleted Success", deletedProduct }) 
}

export const updateProduct: RequestHandler = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price, quantity } = req.body;
const index = products.findIndex (i => i.id ===id)  
  
  const updatedProduct = {
    id: products[index].id,
    name: name,
    price: price,
    quantity: quantity
  };
  
  products[index] = updatedProduct;
  res.json({message:"update Product Success", updatedProduct })
}


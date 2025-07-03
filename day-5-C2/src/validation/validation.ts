import Joi from "joi";

export const joiRegister = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().required(),
});

export const joiLogin = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required()
});

export const joiAddProduct = Joi.object({
    name: Joi.string().required(),
    supplierId: Joi.number().required(),
    stock: Joi.number().required(),

});
import Joi from "joi";

export const vali_register_supplier = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().min(5).required(),
    role: Joi.string().required(),
});

export const log_Schema_supplier = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
});

export const add_product = Joi.object({
    name: Joi.string().required(),
    supplierid: Joi.string().required(),
});

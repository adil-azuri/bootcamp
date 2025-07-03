import Joi from "joi";

export const joiRegister = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().required(),
});

export const joiLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export const joiUpdatePass = Joi.object({
    password: Joi.string().min(6).required(),
});
import { validate, Joi } from "express-validation";

export default validate({
  body: Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    profissao: Joi.string().required(),
    registro: Joi.string().required(),
    senha: Joi.string().min(8).regex(/^[a-zA-Z0-9]/).required()
  }),
});

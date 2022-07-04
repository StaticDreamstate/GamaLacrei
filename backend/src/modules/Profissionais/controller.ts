import { Response, Request } from "express";
import { user } from "../../models";
import bcrypt from "bcryptjs";

const controller = {
  async cadastro(req: Request, res: Response) {
    const hashPass = bcrypt.hashSync(req.body.senha, 10);

    const newUser = await user.instance.create({
      ...req.body,
      senha: hashPass,
    });

    return res.json(newUser);
  },

};

export default controller;

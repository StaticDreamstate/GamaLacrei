import { Request, Response } from "express";
import { cadastro } from "../../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import env from "../../infra/conf/env";

export const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  const hasUser = await cadastro.instance.findOne({ where: { email: email }});
  if(!hasUser) {
    return res.status(401).json("Credenciais invalidas");
  }

  const isValidPassword = await bcrypt.compare(senha, hasUser.senha);
  if(!isValidPassword) {
    return res.status(401).json("Credenciais invalidas");
  }

  const token = jwt.sign({
    id: hasUser.id,
    email: hasUser.email,
    name: hasUser.name
  },
  env.KEY, { expiresIn: '3d' });

  return res.status(200).json({ token })
}

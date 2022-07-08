import { Request, Response } from "express";
import { cadastro } from "../../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import env from "../../infra/conf/env";
import logger from "../../infra/logger";

export const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  const hasUser = await cadastro.instance.findOne({ where: { email: email }});
  if(!hasUser) {
    logger.error(`[login] Usuário inválido: body=${JSON.stringify(
      req.body
    )} client_ip=${req.ips}`);
    return res.status(401).json("Credenciais inválidas");
  }

  const isValidPassword = await bcrypt.compare(senha, hasUser.senha);
  if(!isValidPassword) {
    logger.error(`[login] Senha inválida: body=${JSON.stringify(
      req.body
    )} client_ip=${req.ips}`);
    return res.status(401).json("Credenciais invalidas");
  }

  const token = jwt.sign({
    id: hasUser.id,
    email: hasUser.email,
    name: hasUser.name
  },
  env.KEY, { expiresIn: '3d' });
  logger.info(`[login] Usuário logado: body=${JSON.stringify(
    req.body
  )} client_ip=${req.ips}`);
  return res.status(200).json({ token })
}

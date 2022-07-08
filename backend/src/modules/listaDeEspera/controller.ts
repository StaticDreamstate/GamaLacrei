import { Request, Response } from "express";
import PROFISSOES from "../../constants/profissoes";
import { listaEspera } from "../../models";
import logger from "../../infra/logger";

export const cadastrar = async (req: Request, res: Response) => {

  const { email, profissao } = req.body;

  if(!PROFISSOES.includes(profissao)) {
    logger.error(`[cadastrar] Profissão fora da lista: body=${JSON.stringify(
      req.body
    )} client_ip=${req.ips}`);
    return res.status(400).json({ error: "Sua profissao não é permitida" });
  }

  const novoCadastro = new listaEspera.instance({
    email: email,
    profissao: profissao
  });

  novoCadastro.save();
  logger.info(`[cadastrar] Novo usuário cadastrado: body=${JSON.stringify(
    req.body
  )} client_ip=${req.ips}`);
  return res.status(200).json(novoCadastro);
}


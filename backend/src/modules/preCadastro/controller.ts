import { Request, Response } from "express";
import PROFISSOES from "../../constants/profissoes";
import { cadastro } from "../../models/";
import bcrypt from "bcryptjs";
import logger from "../../infra/logger";

export const listarPendentes = async (req: Request, res: Response) => {
  const list = await cadastro.instance.findOne({
    where: { aprovado: null },
    attributes: { exclude: [
      'senha', 'aprovado', 'dadosPessoais_id', 'dadosProfissionais_id', 'consultorio_id', 'servicos_id'
    ]}
  })
  logger.info(`[listarPendentes] Lista gerada: body=${JSON.stringify(
    req.body
  )} client_ip=${req.ips}`);
  return res.status(200).json(list);
}

export const cadastrar = async (req: Request, res: Response) => {

  const { nome, email, profissao, registro, senha } = req.body;

  if(!PROFISSOES.includes(profissao)) {
    logger.error(`[cadastrar] Profissão fora da lista: body=${JSON.stringify(
      req.body
    )} client_ip=${req.ips}`);
    return res.status(400).json({ error: "Sua profissao não é permitida" });
  }

  const achadoPorEmail = await cadastro.instance.findOne({ where: { email: email } });
  if(achadoPorEmail) {
    logger.error(`[cadastrar] Uso de email já cadastrado: body=${JSON.stringify(
      req.body
    )} client_ip=${req.ips}`);
    return res.status(400).json({ error: "Email já cadastrado" });
  }

  const achadoPorRegistro = await cadastro.instance.findOne({ where: { registro: registro } });
  if(achadoPorRegistro) {
    logger.error(`[cadastrar] Uso de registro já cadastrado: body=${JSON.stringify(
      req.body
    )} client_ip=${req.ips}`);
    return res.status(400).json({ error: "Registro já cadastrado" });
  }

  const senhaHash = bcrypt.hashSync(senha, 10);

  const newUser = await cadastro.instance.create({
    nome,
    email,
    profissao,
    registro,
    senha: senhaHash
  })
  logger.info(`[cadastrar] Novo usuário cadastrado: body=${JSON.stringify(
    req.body
  )} client_ip=${req.ips}`);
  return res.status(201).json({ nome, email, profissao, registro });
}

import { Request, Response } from "express";
import PROFISSOES from "../../constants/profissoes";
import { cadastro } from "../../models/";
import bcrypt from "bcryptjs";

export const listarPendentes = async (req: Request, res: Response) => {
  const list = await cadastro.instance.findOne({
    where: { aprovado: null },
    attributes: { exclude: [
      'senha', 'aprovado', 'dadosPessoais_id', 'dadosProfissionais_id', 'consultorio_id', 'servicos_id'
    ]}
  })

  return res.status(200).json(list);
}

export const cadastrar = async (req: Request, res: Response) => {

  const { nome, email, profissao, registro, senha } = req.body;

  if(!PROFISSOES.includes(profissao)) {
    return res.status(400).json({ error: "Sua profissao não é permitida" });
  }

  const achadoPorEmail = await cadastro.instance.findOne({ where: { email: email } });
  if(achadoPorEmail) {
    return res.status(400).json({ error: "Email já cadastrado" });
  }

  const achadoPorRegistro = await cadastro.instance.findOne({ where: { registro: registro } });
  if(achadoPorRegistro) {
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

  return res.status(201).json({ nome, email, profissao, registro });
}

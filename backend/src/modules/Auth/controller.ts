import { Response, Request } from "express";
import bcrypt from "bcryptjs";
import { user } from "../../models";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

const controller = {
  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    const targetUser = await user.instance.findOne({
      where: {
        email,
      },
    });

    if (!targetUser) {
      return res.status(400).json("Email não cadastrado!");
    }

    if (!bcrypt.compareSync(senha, targetUser.senha)) {
      return res.status(401).json("Senha invalida!");
    }

    const token = jwt.sign(
      {
        id: targetUser.id,
        email: targetUser.email,
        nome: targetUser.name,
        nivel: targetUser.nivel,
      },
      "CRUDGAMA"
    );

    return res.json(token);
  },

  async gerarTokenDeSenha(req: Request, res: Response) {
  
    const { email } = req.body;

    const savedUser = await user.instance.findOne({
      where: {
        email,
      },
    });

    if (!savedUser) {
      return res.status(404).json("Email não encontrado");
    }
  
    const token = CryptoJS.AES.encrypt(
      `${savedUser.email}`,
      "GAMACRUD"
    ).toString();
    // enviar um email com o token
    savedUser.hashResetSenha = token;

    await savedUser.save();
    return res.json(token);
  },

  async recuperarSenha(req: Request, res: Response) {
  
    const { token, senha } = req.body;

    const bytes = CryptoJS.AES.decrypt(token, "GAMACRUD");
    const email = bytes.toString(CryptoJS.enc.Utf8);

    if (!email) {
      return res.status(400).json("token invalido");
    }

    const savedUser = await user.instance.findOne({
      where: {
        email,
      },
    });

    if (!savedUser) {
      return res.status(404).json("Email não encontrado");
    }

    if (!savedUser.hashResetSenha || savedUser.hashResetSenha !== token) {
      return res.status(400).json("token invalido");
    }

    if (bcrypt.compareSync(senha, savedUser.senha)) {
      return res.status(400).json("Senha ja utilizada");
    }

    const newSenha = bcrypt.hashSync(senha, 10);

    savedUser.senha = newSenha;

    savedUser.hashResetSenha = null;

    await savedUser.save();
  
    return res.sendStatus(201);
  },
};

export default controller;

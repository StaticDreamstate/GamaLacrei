import { Response, Request } from "express";
import bcrypt from "bcryptjs";
import { user } from "../../modelos";
import jwt from "jsonwebtoken";
import Crypto from "crypto-js";

const controlador = {
    async login(req: Request, res: Response) {
      const { email, senha } = req.body;
  
      const usuarioAlvo = await user.instancia.findOne({
        where: {
          email,
        },
      });
  
      if (!usuarioAlvo) {
        return res.status(400).json("[!] Email não cadastrado.");
      }
  
      if (!bcrypt.compareSync(senha, usuarioAlvo.senha)) {
        return res.status(401).json("[!] Senha inválida.");
      }
  
      const token = jwt.sign(
        {
          id: usuarioAlvo.id,
          email: usuarioAlvo.email,
          nome: usuarioAlvo.name,
          nivel: usuarioAlvo.nivel,
        },
        "LACREI"
      );
  
      return res.json(token);
    },
  
    async gerarTokenDeSenha(req: Request, res: Response) {
    
      const { email } = req.body;
  
      const usuarioSalvo = await user.instancia.findOne({
        where: {
          email,
        },
      });
  
      if (!usuarioSalvo) {
        return res.status(404).json("[!] Email não encontrado");
      }
    
      const token = CryptoJS.AES.encrypt(
        `${usuarioSalvo.email}`,
        "LACREI"
      ).toString();
  
      usuarioSalvo.hashResetSenha = token;
  
      await usuarioSalvo.save();
      return res.json(token);
    },
  
    async recuperarSenha(req: Request, res: Response) {
    
      const { token, senha } = req.body;
  
      const bytes = CryptoJS.AES.decrypt(token, "LACREI");
      const email = bytes.toString(CryptoJS.enc.Utf8);
  
      if (!email) {
        return res.status(400).json("token invalido");
      }
  
      const usuarioSalvo = await user.instancia.findOne({
        where: {
          email,
        },
      });
  
      if (!usuarioSalvo) {
        return res.status(404).json("Email não encontrado");
      }
  
      if (!usuarioSalvo.hashResetSenha || usuarioSalvo.hashResetSenha !== token) {
        return res.status(400).json("token invalido");
      }
  
      if (bcrypt.compareSync(senha, usuarioSalvo.senha)) {
        return res.status(400).json("Senha ja utilizada");
      }
  
      const newSenha = bcrypt.hashSync(senha, 10);
  
      usuarioSalvo.senha = newSenha;
  
      usuarioSalvo.hashResetSenha = null;
  
      await usuarioSalvo.save();
    
      return res.sendStatus(201);
    },
  };
  
  export default controlador;
  
import { Response, Request } from "express";
import bcrypt from "bcryptjs";
import { user } from "../../modelos";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

import logger from "../../infra/logger";

const controlador = {
    async login(req: Request, res: Response) {
      const { email, senha } = req.body;
  
      const usuarioAlvo = await user.instancia.findOne({
        where: {
          email,
        },
      });

      logger.info(
        `[login] [*] Iniciando processo de login - corpo=${JSON.stringify(
          req.body
        )} client_ip=${req.ips}`
      );
  
      if (!usuarioAlvo) {
        logger.error(
          `[login] [!] Email não cadastrado - corpo=${JSON.stringify(
            req.body
          )} client_ip=${req.ips}`
        );
        return res.status(400).json("[!] Email não cadastrado.");
      }
  
      if (!bcrypt.compareSync(senha, usuarioAlvo.senha)) {
        logger.error(
          `[login] [!] Senha inválida - corpo=${JSON.stringify(
            req.body
          )} client_ip=${req.ips}`
        );
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
      logger.info(
        `[gerarTokenDeSenha] [*] Início de função - corpo=${JSON.stringify(
          req.body
        )} client_ip=${req.ips}`
      );
      const { email } = req.body;
  
      const usuarioSalvo = await user.instancia.findOne({
        where: {
          email,
        },
      });
  
      if (!usuarioSalvo) {
        logger.error(
          `[gerarTokenDeSenha] [!] Email não encontrado - corpo=${JSON.stringify(
            req.body
          )} client_ip=${req.ips}`
        );
        return res.status(404).json("[!] Email não encontrado");
      }
    
      const token = CryptoJS.AES.encrypt(
        `${usuarioSalvo.email}`,
        "LACREI"
      ).toString();

      logger.info(
        `[gerarTokenDeSenha] [*] Token gerado - corpo=${JSON.stringify(
          req.body
        )} client_ip=${req.ips}`
      );
  
      usuarioSalvo.hashResetSenha = token;
  
      await usuarioSalvo.save();
      logger.info(
        `[gerarTokenDeSenha] [*] Senha redefinida - corpo=${JSON.stringify(
          req.body
        )} client_ip=${req.ips}`
      );
      return res.json(token);
    },
  
    async recuperarSenha(req: Request, res: Response) {
    
      const { token, senha } = req.body;
  
      const bytes = CryptoJS.AES.decrypt(token, "LACREI");
      const email = bytes.toString(CryptoJS.enc.Utf8);

      logger.info(
        `[recuperarSenha] [*] Início de função - corpo=${JSON.stringify(
          req.body
        )} client_ip=${req.ips}`
      );
  
      if (!email) {
        logger.error(
          `[recuperarenha] [!] Token inválido - corpo=${JSON.stringify(
            req.body
          )} client_ip=${req.ips}`
        );
        return res.status(400).json("token invalido");
      }
  
      const usuarioSalvo = await user.instancia.findOne({
        where: {
          email,
        },
      });
  
      if (!usuarioSalvo) {
        logger.error(
          `[recuperarenha] [!] Email não encontrado - corpo=${JSON.stringify(
            req.body
          )} client_ip=${req.ips}`
        );
        return res.status(404).json("Email não encontrado");
      }
  
      if (!usuarioSalvo.hashResetSenha || usuarioSalvo.hashResetSenha !== token) {
        logger.error(
          `[recuperarenha] [!] Token inválido - corpo=${JSON.stringify(
            req.body
          )} client_ip=${req.ips}`
        );
        return res.status(400).json("token invalido");
      }
  
      if (bcrypt.compareSync(senha, usuarioSalvo.senha)) {
        logger.error(
          `[recuperarenha] [!] Senha já utilizada - corpo=${JSON.stringify(
            req.body
          )} client_ip=${req.ips}`
        );
        return res.status(400).json("Senha ja utilizada");
      }
  
      const newSenha = bcrypt.hashSync(senha, 10);
  
      usuarioSalvo.senha = newSenha;
  
      usuarioSalvo.hashResetSenha = null;
  
      await usuarioSalvo.save();

      logger.info(
        `[recuperarSenha] [*] Senha recuperada - corpo=${JSON.stringify(
          req.body
        )} client_ip=${req.ips}`
      );
    
      return res.sendStatus(201);
    },
  };
  
  export default controlador;
  
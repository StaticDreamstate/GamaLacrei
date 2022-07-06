import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { user } from "../../modelos";

import logger from "../../infra/logger";

const controlador = {

    async cadastro(req: Request, res: Response) {
        const hashSenha = bcrypt.hashSync(req.body.senha, 10);
        const novoUsuario = await user.instancia.create({
            ...req.body,
            senha: hashSenha,
        });

        logger.info(
            `[cadastro] [*] Novo usuário cadastrado - corpo=${JSON.stringify(
              req.body
            )} client_ip=${req.ips}`
          );

        return res.json(novoUsuario);
    }
};

export default controlador;
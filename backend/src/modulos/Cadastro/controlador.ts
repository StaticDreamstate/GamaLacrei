import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { user } from "../../modelos";

const controlador = {

    async cadastro(req: Request, res: Response) {
        const hashSenha = bcrypt.hashSync(req.body.senha, 10);
        const novoUsuario = await user.instancia.create({
            ...req.body,
            senha: hashSenha,
        });

        return res.json(novoUsuario);
    }
};

export default controlador;
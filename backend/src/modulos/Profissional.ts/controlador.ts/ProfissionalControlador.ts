import { Request, Response } from "express";

import ProfissionalCasoDeUso from "../casoDeUso.ts/ProfissionalCasoDeUso";

type BodyCreateProfissional = {
  id: number
  estado: string;
  nome_completo: string;
  email: string;
  profissao: string;
  prefixo_profissao: string;
  registro_profissao: string;
  senha: string;
};

export default class ProfissionalControlador {
  private useCase: ProfissionalCasoDeUso;

  constructor(casoDeUso: ProfissionalCasoDeUso) {
    this.useCase = casoDeUso;
  }

  create() {
    return async (req: Request, res: Response) => {
      try {
        //recebemos a requisição

        const profissional = await this.useCase.cadastrarProfissional(
          req.body as BodyCreateProfissional
        );

        //devolvemos uma resposta
        return res.status(201).json(profissional);
      } catch (error) {
        console.log(error);
        return res.status(500).json("Algo errado aconteceu, contate o suporte!");
      }
    };
  }

  listar() {
    return async (req: Request, res: Response) => {
      try {
        const lista = await this.useCase.listarProfissional({
          ativo: !!req.query.ativo,
        });

        return res.json(lista);
      } catch (error) {
        console.log(error);
        return res.status(500).json("Algo errado aconteceu, chame o batman!");
      }
    };
  }
}

import { Request, Response } from "express";

import ProfissionalCasoDeUso from "../casoDeUso/ProfissionalCasoDeUso";

type BodyCreateProfissional = {
  estado: string;
  nome_completo: string;
  email: string;
  profissao: string;
  prefixo_profissional: string;
  registro_profissional: string;
  senha: string;
};

export default class ProfissionalControlador {
  private useCase: ProfissionalCasoDeUso;

  constructor(useCase: ProfissionalCasoDeUso) {
    this.useCase = useCase;
  }

  criar() {
    return async (req: Request, res: Response) => {
      try {
        const profissional = await this.useCase.cadastrarProfissional(
          req.body as BodyCreateProfissional
        );
        return res.status(201).json(profissional);
      } catch (error) {
        return res
          .status(500)
          .json("Algo errado aconteceu, contate o suporte!");
      }
    };
  }

  listarTodos() {
    return async (req: Request, res: Response) => {
      try {
        const lista = await this.useCase.listarProfissional();

        return res.json(lista);
      } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json("Algo errado aconteceu, contate o suporte!");
      }
    };
  }
}

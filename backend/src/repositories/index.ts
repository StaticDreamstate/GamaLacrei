import { profissional, consultorio, endereco, servico } from "../models";
import ProfissionalRepositorio from "./Profissional";

const profissionalRepositorio = new ProfissionalRepositorio(profissional);

export { profissionalRepositorio };

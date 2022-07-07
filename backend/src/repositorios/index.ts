import { profissional, consultorio, endereco, servico } from "../modelos";
import ProfissionalRepositorio from "./Profissional";

const profissionalRepositorio = new ProfissionalRepositorio(profissional);

export { profissionalRepositorio };

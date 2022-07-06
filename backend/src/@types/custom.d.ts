type Usuario = {
    id: number;
    nome: string;
    email: string;
    permissao: number;
  };
  
  declare namespace Express {
    export interface Request {
      usuario?: Usuario;
    }
  }
  
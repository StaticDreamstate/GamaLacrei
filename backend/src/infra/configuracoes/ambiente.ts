import "dotenv/config";

const ambiente = {
    NOME_BD: process.env.NOME_BD as string,
    HOST_BD: process.env.HOST_BD as string,
    PORTA_BD: Number(process.env.PORTA_BD),
    USUARIO_BD: process.env.USUARIO_BD as string,
    SENHA_BD: process.env.SENHA_BD as string,
};

export default ambiente;
import ambiente from "./ambiente";

const emailConf = {
    host: "smtp-mail.outlook.com", // Evite o gmail. Ele dá muita dor de cabeça. 
    port: 587,
    secure: false,
    user: ambiente.USUARIO_EMAIL,
    pass: ambiente.SENHA_EMAIL
}

export default emailConf;


import env from "./env";

const emailConf = {
    host: "smtp-mail.outlook.com", // Evite o gmail. Ele dá muita dor de cabeça. 
    port: 587,
    secure: false,
    user: env.MAIL_USER,
    pass: env.MAIL_PASS
}

export default emailConf;
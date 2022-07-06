import nodemailer from "nodemailer";
import emailConf from "../infra/configuracoes/smtp";

const transport = nodemailer.createTransport({
    host: emailConf.host,
    port: emailConf.port,
    secure: emailConf.secure,
    auth: {
        user: emailConf.user,
        pass: emailConf.pass
    },

    tls: {
        rejectUnauthorized: false,
    }
});

export default async function enviar() {

    const emailEnviado = await transport.sendMail({
        subject: "Teste de disparo de e-mail da api",
        text: "Só trabalho sem diversão faz de Yuri um puta loucão.",
        from: `Seu nome aqui <${emailConf.user}>`,
        to: ['destinatario@email.com'] // Esse array pode ser usado para múltiplos destinatários.
    });

}

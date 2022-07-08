import nodemailer from "nodemailer";
import emailConf from "../infra/conf/smtp";

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

export default async function enviar(rem: string, dest: string, sub?: string, body?: string) {

    const emailEnviado = await transport.sendMail({
        subject: sub,
        text: body,
        from: `${rem} <${emailConf.user}>`,
        to: dest.split(',') // Esse array pode ser usado para múltiplos destinatários.
    });

}

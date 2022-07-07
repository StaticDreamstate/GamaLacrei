import winston from "winston";
import path from "path";

const erros = path.resolve("src", "infra", "logs", "erros.log");
const avisos = path.resolve("src", "infra", "logs", "avisos.log");
const info = path.resolve("src", "infra", "logs", "info.log");
const http = path.resolve("src", "infra", "logs", "http.log");
const verbose = path.resolve("src", "infra", "logs", "verbose.log");
const depuracao = path.resolve("src", "infra", "logs", "debug.log");

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.errors({ stack: true })
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: erros, level: 'error' }),
      new winston.transports.File({ filename: avisos, level: 'warn' }),
      new winston.transports.File({ filename: info, level: 'info' }),
      new winston.transports.File({ filename: http, level: 'http' }),
      new winston.transports.File({ filename: verbose, level: 'verbose' }),
      new winston.transports.File({ filename: depuracao, level: 'debug' }),
    ],
  });
  
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }

export default logger;

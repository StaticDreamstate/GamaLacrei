import env from "./env";

const db = {
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  host: env.DB_HOST,
  dialect: "mysql",
};

// console.log(db);

module.exports = db;
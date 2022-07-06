import App from "./infra/App";
// import enviar from "./mail/";

const application = new App();

// application.setup({ porta: 4000, teste: true });

application.setup({ porta: 4000 });
// enviar();

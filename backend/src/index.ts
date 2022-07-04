import App from "./infra/app";

const application = new App();

application.setup({ port: 4000 });

import App from "./infra/App";

const application = new App();

// application.setup({ port: 4000, isTest: true });
application.setup({ port: 4000 });

import Express, { Application } from "express";
import { mySqlConnection } from "../database";

import handleError from "../middlewares/handleError";
import BaseRoutes from "../infra/BaseRoutes";

type SetupOptions = {
  isTest?: boolean;
  port?: number;
};
export default class App {
  private instance: Application;
  private defaultPort: number = 4000;

  constructor() {
    this.instance = Express();
  }

  async setup(options: SetupOptions): Promise<void> {
    const selectedPort = options.port ? options.port : this.defaultPort;
    this.instance.use(Express.static('public'));
    this.instance.use(Express.json());
    this.instance.use(BaseRoutes);
    this.instance.use(handleError);

    mySqlConnection.hasConnection();

    if (options.isTest) return;

    this.instance.listen(selectedPort, () =>
      console.log(`[OK] Servidor escutando... [Porta TCP ${selectedPort}]`)
    );
  }

  getInstance() {
    return this.instance;
  }
}

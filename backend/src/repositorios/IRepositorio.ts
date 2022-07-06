export default interface IRepositorio {
  create(payload: any): Promise<any>;
  update(): Promise<any>;
  find(): Promise<any>;
  findAll(payload: any): Promise<any>;
  delete(): Promise<any>;
}

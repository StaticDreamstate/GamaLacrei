export default interface IRepositorio {
  criar(payload: any): any;
  atualizar(payload: any): any;
  listarUm(): any;
  listarTodos(): any;
  deletar(): any;
}

import { DescricaoProdutoModel } from './descricao-produto.model';
import { ProdutoModel } from './produto.model';

export class CarrinhoModel {
  produto: ProdutoModel;
  descricaoProduto: DescricaoProdutoModel;
  quantidade: number;
  valorTotal: number;
  constructor() {
    this.produto = new ProdutoModel();
    this.descricaoProduto = new DescricaoProdutoModel();
    this.quantidade = 0;
    this.valorTotal = 0;
  }
}

import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from '../shared/produto.model';
import { CarrinhoModel } from '../shared/carrinho.model';

@Component({
  selector: 'compra-feliz',
  styleUrls: ['./compra-feliz.component.css'],
  templateUrl: './compra-feliz.compont.html'
})

export class CompraFelizComponent implements OnInit {

  tela: string = "";
  produtoSelecionado: ProdutoModel = null;
  itemCarrinho: CarrinhoModel = new CarrinhoModel();
  listaCarrinho: CarrinhoModel[] = [];
  quantidadeCarrinho: number = 0;

  constructor() {

  }

  ngOnInit() {
    this.tela = "lista";
  }

  exibeDetalhesProduto(produto: ProdutoModel) {
    this.tela = "detalhes";
    this.produtoSelecionado = produto;
  }

  selecionadaProdutoFiltro(produto: ProdutoModel) {
    this.tela = "lista";
    this.produtoSelecionado = produto;
  }

  comprarProduto(itemCarrinho: CarrinhoModel) {
    this.tela = "checkout";
    this.itemCarrinho = itemCarrinho;
    this.listaCarrinho.push(itemCarrinho);
  }

  itemRemovidoCarrinho(itemLista: CarrinhoModel) {
    let lista = this.listaCarrinho;

    this.listaCarrinho.splice(this.listaCarrinho.indexOf(itemLista), 1);

    console.log(lista);
  }

  voltarTelaOriginal() {
    this.tela = "lista";
    this.produtoSelecionado = null;
    this.itemCarrinho = new CarrinhoModel();
    this.listaCarrinho = [];
  }

}


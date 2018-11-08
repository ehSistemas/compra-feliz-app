import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ProdutoModel } from '../shared/produto.model';
import { DescricaoProdutoModel } from '../shared/descricao-produto.model';
import { CompraFelizService } from '../shared/compra-feliz.service';
import { CarrinhoModel } from '../shared/carrinho.model';

@Component({
  selector: 'detalhes-produto',
  styleUrls: ['./detalhes-produto.component.css'],
  templateUrl: './detalhes-produto.component.html',
  providers: [CompraFelizService]

})

export class DetalhesProdutoComponent {

  _produtoSelecionado: ProdutoModel = new ProdutoModel()
  descricaoProduto: DescricaoProdutoModel = new DescricaoProdutoModel();
  slideIndex: number = 0;
  comprarProdutoForm: FormGroup;
  itemCarrinho: CarrinhoModel = new CarrinhoModel();
  
  @Output() comprarProdutoEvent: EventEmitter<CarrinhoModel> = new EventEmitter<CarrinhoModel>();

  @Input() set produtoSelecionado(valor: ProdutoModel) {
    this.buscarDetalheProduto(valor.id);
    this._produtoSelecionado = valor;
  }

  constructor(private fb: FormBuilder, private compraFelizService: CompraFelizService) {
    this.criarFormularioAdicionarProduto();
  }


  criarFormularioAdicionarProduto() {
    this.comprarProdutoForm = this.fb.group({
      'quantidade': 1
    });
  }

  buscarDetalheProduto(idProduto: number) {
    this.compraFelizService.buscarDescricaoProduto(idProduto)
      .subscribe(x => {
        this.descricaoProduto = x;
      });
  }

  selecionarImagem(valor: number) {
    this.slideIndex = this.mod(valor, this.descricaoProduto.fotos.length);
  }

  alterarDiv(valor: number) {
    
    this.slideIndex = this.mod(this.slideIndex + valor, this.descricaoProduto.fotos.length);

  }

  mod(a: number, b: number): number {
    var mod: number = a - ((Math.floor(a / b)) * b);

    return mod;
  }

  submitFormModalComprar(form) {
    this.itemCarrinho.produto = this._produtoSelecionado;
    this.itemCarrinho.quantidade = form.quantidade;
    this.itemCarrinho.valorTotal = (form.quantidade * this.itemCarrinho.produto.valor);
    this.comprarProdutoEvent.emit(this.itemCarrinho);
  }
}


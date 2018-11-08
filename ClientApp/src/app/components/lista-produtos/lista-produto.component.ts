import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ProdutoModel } from '../shared/produto.model';
import { CompraFelizService } from '../shared/compra-feliz.service';
import { ModalComponent } from '../modal/modal.component';
import { CarrinhoModel } from '../shared/carrinho.model';

@Component({
  selector: 'lista-produto',
  styleUrls: ['./lista-produto.component.css'],
  templateUrl: './lista-produto.component.html',
  providers: [CompraFelizService]
})

export class ListaProdutoComponent implements OnInit {

  listaProduto: ProdutoModel[] = [];
  comprarProdutoForm: FormGroup;
  itemCarrinho: CarrinhoModel = new CarrinhoModel();

  @ViewChild('modalComprar') modalComprar: ModalComponent;

  @Output() comprarProdutoEvent: EventEmitter<CarrinhoModel> = new EventEmitter<CarrinhoModel>();
  @Output() exibeDetalhesEvent: EventEmitter<ProdutoModel> = new EventEmitter<ProdutoModel>();
  @Input() set produtoSelecionado(produto: ProdutoModel) {
    this.listaProduto = [];

    if (produto == null) {
      this.buscarListaProdutos();
    }
    else {

      this.listaProduto.push(produto);
    }

  }

  constructor(private fb: FormBuilder, private compraFelizService: CompraFelizService) {
    this.criarFormularioAdicionarProduto();
  }

  ngOnInit() {

  }

  criarFormularioAdicionarProduto() {
    this.comprarProdutoForm = this.fb.group({
      'quantidade': 1
    });
  }

  buscarListaProdutos() {

    this.compraFelizService.buscarProdutos()
      .subscribe(x => {
        this.listaProduto = x;
      });
  }

  selecionaProduto(item: ProdutoModel) {
    this.exibeDetalhesEvent.emit(item);
  }

  abrirModal(produdo: ProdutoModel) {

    this.itemCarrinho.produto = produdo;
    this.modalComprar.abrirModal("Comprar Produto", "", true);
  }

  submitFormModalComprar(form) {
    this.itemCarrinho.quantidade = form.quantidade;
    this.itemCarrinho.valorTotal = (form.quantidade * this.itemCarrinho.produto.valor);
    this.modalComprar.fecharModal();
    this.comprarProdutoEvent.emit(this.itemCarrinho);
  }

}


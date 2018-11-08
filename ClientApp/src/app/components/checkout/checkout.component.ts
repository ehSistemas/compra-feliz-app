import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { CarrinhoModel } from '../shared/carrinho.model';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'checkout',
  styleUrls: ['./checkout.component.css'],
  templateUrl: './checkout.component.html'
})

export class CheckOutComponent {

  listaCarrinho: CarrinhoModel[] = [];
  valorTotalCompra: number = 0;
  load: boolean = false;

  @ViewChild('modalConfirmar') modalConfirmar: ModalComponent;

  @Input() set novoItemCarrinho(item: CarrinhoModel[]) {
    console.log(item);
    this.listaCarrinho = item;

    item.forEach(x => {
      this.valorTotalCompra = this.valorTotalCompra + x.valorTotal;
    });
  }

  @Output() itemRemovidoCarrinhoEmit: EventEmitter<CarrinhoModel> = new EventEmitter<CarrinhoModel>();

  @Output() voltarTelaOrigemEmit: EventEmitter<void> = new EventEmitter<void>();

  constructor() {

  }

  removerItemCarrinho(index: number, itemLista: CarrinhoModel) {

    this.load = true;
    this.valorTotalCompra = this.valorTotalCompra - itemLista.valorTotal;

    this.listaCarrinho.splice(index, 1);

    setInterval(() => { this.load = false }, 1000);
  }

  adicionarMaisItens(event, item: CarrinhoModel) {

    let itemAtual = this.listaCarrinho[this.listaCarrinho.indexOf(item)];
    let valorToTalAtual = this.valorTotalCompra - itemAtual.valorTotal;

    itemAtual.quantidade = event.target.value;
    itemAtual.valorTotal = itemAtual.quantidade * itemAtual.produto.valor;

    this.valorTotalCompra = valorToTalAtual + itemAtual.valorTotal;

    this.listaCarrinho[this.listaCarrinho.indexOf(item)] = itemAtual;

  }

  abrirModalFinalizar() {
    this.modalConfirmar.abrirModal("Finalizar Compra", "", true);
  }

  fecharModal() {
    this.modalConfirmar.fecharModal();
    this.voltarTelaOrigemEmit.emit();
  }

}

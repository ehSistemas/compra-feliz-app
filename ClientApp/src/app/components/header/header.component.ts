import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { ProdutoModel } from '../shared/produto.model';
import { CompraFelizService } from '../shared/compra-feliz.service';
import { Produtos } from '../shared/moc-produtos';


@Component({
  selector: 'header',
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html',
  providers: [CompraFelizService]
})

export class HeaderComponent implements OnInit {

  produtoAtual: FormControl = new FormControl();
  listaProdutos: ProdutoModel[] = [];

  @Output() selecionadaProdutoFiltroEvent: EventEmitter<ProdutoModel> = new EventEmitter<ProdutoModel>();

  constructor(private compraFelizService: CompraFelizService) {

  }

  ngOnInit() {

  }

  alterarValorPesquisa() {

    if (this.produtoAtual.value == "") {
      let produto: ProdutoModel = null;
      this.selecionadaProdutoFiltroEvent.emit(produto);
    }
    else {
      this.filtrar(this.produtoAtual.value);
    }

  }

  filtrar(valor: string) {

    this.listaProdutos = [];

    this.compraFelizService.buscarProdutoAutoComplete(valor)
      .subscribe(x => {
        this.listaProdutos = x;
      });


  }

  selecionaProduto(produto: ProdutoModel) {

    this.selecionadaProdutoFiltroEvent.emit(produto);
  }

  voltarPaginaInicial() {

    let produto: ProdutoModel = null;
    this.selecionadaProdutoFiltroEvent.emit(produto);

  }

}


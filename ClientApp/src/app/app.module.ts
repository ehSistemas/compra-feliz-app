import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CompraFelizComponent } from './components/compra-feliz/compra-feliz.component';
import { HeaderModule } from './components/header/header.module';
import { ListaProdutoModule } from './components/lista-produtos/lista-produto.module';
import { DetalheProdutoModule } from './components/detalhes-produto/detalhe-produto.module';
import { ModalModule } from './components/modal/modal.module';
import { CheckOutModule } from './components/checkout/checkout.module';
import { HttpModule } from '@angular/http';


let imports = [BrowserModule, HeaderModule, ListaProdutoModule, DetalheProdutoModule, ModalModule, CheckOutModule, HttpModule];

@NgModule({
  declarations: [
    CompraFelizComponent
  ],
  imports: [
    imports
  ],
  providers: [],
  bootstrap: [CompraFelizComponent],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { ListaProdutoComponent } from './lista-produto.component';
import { ModalModule } from '../modal/modal.module';


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatCardModule, MatButtonModule, ModalModule],

  exports: [ListaProdutoComponent],

  declarations: [ListaProdutoComponent],

})
export class ListaProdutoModule { }

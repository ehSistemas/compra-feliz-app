import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DetalhesProdutoComponent } from './detalhes-produto.component';
import { ModuloMaterialModule } from '../../modulo-material.module';

@NgModule({
  imports: [CommonModule, ModuloMaterialModule, FormsModule, ReactiveFormsModule],

  exports: [DetalhesProdutoComponent],

  declarations: [DetalhesProdutoComponent],

})
export class DetalheProdutoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompraFelizComponent } from './compra-feliz.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [CommonModule, HeaderModule],

  exports: [CompraFelizComponent],

  declarations: [CompraFelizComponent],

})
export class CompraFelizModule { }

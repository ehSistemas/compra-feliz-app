import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckOutComponent } from './checkout.component';
import { HeaderModule } from '../header/header.module';
import { ModuloMaterialModule } from '../../modulo-material.module';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  imports: [CommonModule, HeaderModule, ModuloMaterialModule, FormsModule, ReactiveFormsModule, ModalModule],

  exports: [CheckOutComponent],

  declarations: [CheckOutComponent],

})
export class CheckOutModule { }

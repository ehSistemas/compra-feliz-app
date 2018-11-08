import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatOptionModule } from '@angular/material';

import { HeaderComponent } from './header.component';


@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatAutocompleteModule, MatOptionModule,  ReactiveFormsModule],
    
  exports: [HeaderComponent],

  declarations: [HeaderComponent],
  
})
export class HeaderModule { }

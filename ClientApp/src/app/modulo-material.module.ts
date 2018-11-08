import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatOptionModule,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatListModule,
  MatProgressSpinnerModule,
  
} from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatExpansionModule,
    MatListModule,
    MatProgressSpinnerModule,
],

  exports: [
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatExpansionModule,
    MatListModule,
    MatProgressSpinnerModule,
],

  declarations: [],

})
export class ModuloMaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { DadoComponent } from './dado/dado.component';
import { DadoListComponent } from './dado-list/dado-list.component';
import { DadosComponent } from './dado-list/dados/dados.component';

@NgModule({
  declarations: [ 
    DadoComponent, 
    DadoListComponent, DadosComponent
],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class DadosModule { }
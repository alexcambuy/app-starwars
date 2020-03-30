import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { FotoComponent } from './foto/foto.component';
import { FotoListComponent } from './foto-list/foto-list.component';
import { FotosComponent } from './foto-list/fotos/fotos.component';

@NgModule({
    declarations: [ 
        FotoComponent, 
        FotoListComponent, FotosComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class FotosModule{}
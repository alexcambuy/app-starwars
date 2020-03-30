import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { FotoListComponent } from './fotos/foto-list/foto-list.component';
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { DadoListComponent } from "./dados/dado-list/dado-list.component";

const routes: Routes = [
    { path: '', component: DadoListComponent },
    { path: '2', component: FotoListComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}
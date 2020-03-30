import { Component, Input } from '@angular/core';

@Component({
    selector: './sw-foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent{
    @Input() title='';
    @Input() original='';
}
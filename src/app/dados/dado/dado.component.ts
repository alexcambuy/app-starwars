import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent{
  @Input() name='';
}

import { Component, OnInit, Input } from '@angular/core';
import { Dado } from '../../dado/dado';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  @Input() dados: Dado[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
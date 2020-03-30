import { Component, OnInit, Input } from '@angular/core';
import { Foto } from '../../foto/foto';

@Component({
  selector: 'ap-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  @Input() fotos: Foto[] = [];

  constructor() { }

  ngOnInit() {
  }

}

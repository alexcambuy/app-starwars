import { Component, OnInit } from '@angular/core';
import { DadoService } from '../dado/dado.service';
import { ActivatedRoute } from '@angular/router';
import { Dado } from '../dado/dado';

@Component({
  selector: 'ap-dados-list',
  templateUrl: './dado-list.component.html',
  styleUrls: ['./dado-list.component.css']
})
export class DadoListComponent implements OnInit {

  itens: string[];
  dado: Dado;
  paginas:number;
  nextPage: string;
  itemPage: Array<any>;
  countArray:number = 0;

  constructor(private dadoService: DadoService) { }

  ngOnInit() {
    this.dadoService.sendGetRequest().subscribe((dado)=>{
      this.itens = dado.results;
      this.paginas = Math.round(dado.count / 10);
      this.itemPage = Array.from({length: this.paginas}, (k) => k);
      var arr = this.itemPage;
      for (var i = 0, len = arr.length; i < len; i++) {
        this.countArray = i+1;
      }
    });
    
  }

}
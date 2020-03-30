import { Component, OnInit } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute } from '@angular/router';
import { Foto } from '../foto/foto';

@Component({
  selector: 'ap-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent implements OnInit {
  
  fotos: Foto[] = []
  
  constructor(
    private fotoService: FotoService,
    private activatedRoute: ActivatedRoute
    ){  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const titleName = 'Darth+Vader';
    this.fotoService
      .listFromTitle(titleName)
      .subscribe(fotos => this.fotos = fotos);
    
  }

}

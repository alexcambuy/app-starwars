import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dado } from './dado';

const API = 'https://swapi.co/api/people/?page=1';

@Injectable({providedIn : 'root'})
export class DadoService{
    constructor(private http: HttpClient){}

    sendGetRequest(){
        return this.http
        .get<Dado>(API);
    }
    
}
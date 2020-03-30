import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foto } from './foto';

const API = 'https://serpapi.com/search?q=';

@Injectable({providedIn : 'root'})
export class FotoService{
    constructor(private http: HttpClient){}

    listFromTitle(titleName: string){
        return this.http
        .get<Foto[]>(API + titleName +'&tbm=isch&ijn=0');
    }
}
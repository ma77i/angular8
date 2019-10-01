import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//mecanismo de Angular para comunicarse con un servidor remoto a través de HTTP.
import { Observable } from 'rxjs';
import { Pelicula } from '../model/pelicula';
import { LoginResponse } from '../others/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient ) { }

  getPeliculas():Observable<any>{
   
   return this.http.get(this.baseUrl +"/peliculas");
   
  }
  crearPelicula(pelicula: Pelicula) {
    return this.http.post(this.baseUrl +"/peliculas",pelicula); 
  
  }
  login(user:string,password:string):Observable<LoginResponse>{
    return this.http.get<LoginResponse>(this.baseUrl + '/auth');
  }



}

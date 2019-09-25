import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from './model/api.response';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = 'https://facebook.github.io/react-native/movies.json';

  constructor(private http: HttpClient ) { }



  getUsers()  {
    
    let datos=this.http.get(this.baseUrl);
    return datos;
  }

}

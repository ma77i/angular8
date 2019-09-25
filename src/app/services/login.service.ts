import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//mecanismo de Angular para comunicarse con un servidor remoto a través de HTTP.
import { Observable } from 'rxjs';
import { User } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = 'https://facebook.github.io/react-native/movies.json';

  constructor(private http: HttpClient ) { }

  getUsers()  {
    
   return this.http.get(this.baseUrl);
   
  }


}

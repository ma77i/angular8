import { Injectable } from '@angular/core';
import { User } from '../others/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn;
  private  usserLogged:User;
 

  constructor() { 
    this.isUserLoggedIn = false;
  }

  //setea el usuario cuando se loguea añadendolo al localStorage del navegador
  setUserLoggedIn(user:User) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  
  }
  //devuelve el user de localStorage
  getUserLoggedIn() {
  	return JSON.parse(localStorage.getItem('currentUser'));
  }
}

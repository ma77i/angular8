import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'; //importo el servicio
import {Router} from "@angular/router";
import { User } from '../model/users';
import { Observable } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor( private loginService:LoginService,private router: Router,) { }
  
  

  onClickSubmit() {
    this.loginService.getUsers() .subscribe(
      (data) => { // Success
        alert(data);
        this.router.navigate(['list']);
      },
      (error) => {
        console.error(error);
      }
    );


    
    
    
 }

  ngOnInit() {
   

  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../login.service"; //Importo el servicio 
import { User } from '../model/user.model';
import { Observable } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 usuarios: [];

  constructor(private router: Router,private LoginService: LoginService) { }


  onClickSubmit() {
     

      this.LoginService.getUsers().subscribe((data)=>{
       
      });
      this.router.navigate(['list']);

 }



  ngOnInit() {
  
   
  }

}

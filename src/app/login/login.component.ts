import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../services/login.service"; //Importo el servicio 
import { User } from '../model/users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario;

  constructor(private router: Router,private LoginService: LoginService) { }


  onClickSubmit() {
     

      // this.LoginService.getUsers().subscribe((data)=>{
      //   this.usuario = data;
      // });
          this.router.navigate(['list']);

 }



  ngOnInit() {
  
   
  }

}

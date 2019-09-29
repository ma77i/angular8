import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../services/api.service"; //Importo el servicio 
import { Pelicula } from '../model/pelicula';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario;

  constructor(private router: Router,private apiService: ApiService) { }


  onClickSubmit() {
     

      // this.LoginService.getUsers().subscribe((data)=>{
      //   this.usuario = data;
      // });
          this.router.navigate(['list']);

 }



  ngOnInit() {
  
   
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../services/api.service"; //Importo el servicio 
import { Pelicula } from '../model/pelicula';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form_login: FormGroup;

  constructor(private apiService: ApiService, private userService:UserService,
    private router: Router, private _builder: FormBuilder) {

    this.form_login = this._builder.group({

      user: ['', Validators.required],
      password: ['', Validators.required]
     
    })

  }

  onSubmit(formData) {

  this.apiService.login(formData.user,formData.password).subscribe(response=> {
    //Si ES TRUE EL LOGIN 
   if(response[0].success){
       this.userService.usuario=response.usuario;
       this.router.navigate(['list']);

   }
   else{
     alert("datos incorrectos");
   }

  })
    
  
 }

 
       

  ngOnInit() {
  
   
  }

}

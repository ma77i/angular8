import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from "../services/api.service"; //Importo el servicio 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../others/interfaces';
import { AutenticacionService } from '../services/autenticacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form_login: FormGroup;
  loading = false;
  submitted = false;
  invalidLogin= false;
  loginSuccess: boolean;

  constructor(private apiService: ApiService, private userService: UserService,
    private authenticationService:AutenticacionService,
    private router: Router, private _builder: FormBuilder) {

    this.form_login = this._builder.group({

      user: ['', Validators.required],
      password: ['', Validators.required]

    })
  }

  // onSubmit(formData) {
  //   this.submitted = true;
  //   //si no correcto las reglas del form entonces se detiene aca
  //   if (this.form_login.invalid) {
  //     return;
  //   }
  //   this.loading = true;
  //   this.apiService.login(formData.user, formData.password).subscribe( 
  //     response => {
  //       //Si ES TRUE EL LOGIN 
  //       if (response.success) {
  //         console.log(response);
  //         let u: User = {nombre:"",apellido:"",email:"",tipo:"",usuario:formData.user};        
  //         //this.userService.setUserLoggedIn(u);
  //         sessionStorage.setItem('loggedUser', u.usuario);
  //         this.router.navigate(['list']);
  //       }
  //       else{
  //           this.invalidLogin = true;  
  //       }
  //     },
  //     error => {
  //       console.error(error);
  //       this.loading = false;

  //     }
  //   )
  // }

  onSubmit(formData) {
    this.submitted = true;
    if (this.form_login.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.authenticationService(formData.user, formData.password).subscribe(response => {
      //Si ES TRUE EL LOGIN 
      
        let u: User = {nombre:"",apellido:"",email:"",tipo:"",usuario:formData.user};
        this.invalidLogin = false;

        this.router.navigate(['list']);
           
      
        this.invalidLogin = true; 
       
    }),
         error => {
         console.error(error);
         this.loading = false;

       }
  }

   
  ngOnInit() {
  

  }

}

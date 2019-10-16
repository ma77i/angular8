import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from "../services/api.service"; //Importo el servicio 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../others/interfaces';
import { AutenticacionService } from '../services/autenticacion.service';
import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form_login: FormGroup;
  loading = false;
  submitted = false;
  invalidLogin = false;
  loginSuccess: boolean;

  constructor(private apiService: ApiService,private authService: AuthService,
    private router: Router, private _builder: FormBuilder) {

  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 
 
  signOut(): void {
    this.authService.signOut();
  }


  // onSubmit(formData) {
  //   this.submitted = true;
  //   if (this.form_login.invalid) {
  //     return;
  //   }
  //   this.loading = true;
  //   this.authenticationService.authenticationService().subscribe(response => {
  //     //Si ES TRUE EL LOGIN 
  //     let u: User = { nombre: "", apellido: "", email: "", tipo: "", usuario: formData.user };
  //     this.userService.setUserLoggedIn(u);
  //     this.invalidLogin = false;
  //     this.router.navigate(['list']);
  //     this.invalidLogin = true;

  //   }),
  //     error => {
  //       console.error(error);
  //       this.loading = false;

  //     }
  // }

  // get f() { return this.form_login.controls; }

  ngOnInit() {
    // this.form_login = this._builder.group({
    //   user: ['', Validators.required],
    //   password: ['', Validators.required]
    // })

  }
}

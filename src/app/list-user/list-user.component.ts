import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ApiService } from '../services/api.service'; //importo el servicio
import { Router } from "@angular/router";
import { Pelicula } from '../model/pelicula';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../services/autenticacion.service';
import { AuthService, SocialUser } from 'angularx-social-login';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;

  peliculas: Observable<Pelicula[]>;

  constructor(private apiService: ApiService, private authService: AuthService,private router: Router) { }

  ngOnInit() {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    this.reloadData();

  }

  reloadData() {
    this.apiService.getPeliculas().subscribe((data) => {
      this.peliculas = data;
    });
  }

  verDetalle(id: number) {
    alert("HOLA");
    //this.router.navigate(['details', id]);
  }

  agregarPelicula() {
    alert("hola");
  }






}

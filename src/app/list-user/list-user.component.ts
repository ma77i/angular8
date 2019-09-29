import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ApiService } from '../services/api.service'; //importo el servicio
import { Router } from "@angular/router";
import { Pelicula } from '../model/pelicula';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  //peliculas: Observable<Pelicula[]>;
  peliculas: Observable<Pelicula[]>;

  // @ViewChild(Router,{static: false}) hijo: LoginComponent;loginService:LoginService

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.reloadData();

  }
  reloadData() {

    this.apiService.getPeliculas().subscribe((data) => {

      this.peliculas = data;

    });

  }
  





  verDetalle(id: number) {

    alert("HOLA PRINCESA");
    //this.router.navigate(['details', id]);
  }
  agregarPelicula() {
    alert("hola");
  }


}

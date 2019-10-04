import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ApiService } from '../services/api.service'; //importo el servicio
import { Router } from "@angular/router";
import { Pelicula } from '../model/pelicula';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../services/autenticacion.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

 
  peliculas: Observable<Pelicula[]>;

  constructor(private apiService: ApiService,private authenticationService:AutenticacionService) { }

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

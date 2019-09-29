import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../model/pelicula';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  form_add_movie: FormGroup;
  pelicula: Pelicula = new Pelicula();
  submitted = false;

  constructor(private apiService: ApiService,
    private router: Router, private _builder: FormBuilder) {

    this.form_add_movie = this._builder.group({

      nombre: ['', Validators.required],
      director: ['', Validators.required],
      clasificacion: ['', Validators.required],
      anoEstreno: ['', Validators.required]
    })

  }

  ngOnInit() {
  
  }

  save(customerData) {
    this.apiService.crearPelicula(customerData).
    subscribe(data => this.gotoList(), error => console.log(error));
  }

  onSubmit(customerData) {
    this.submitted = true;
    this.save(customerData);
  }

  gotoList() {
    this.router.navigate(['list']);
  }

}

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
  form_alta = false;

  constructor(private apiService: ApiService,
    private router: Router, private _builder: FormBuilder) {

  }

  ngOnInit() {
    this.form_add_movie = this._builder.group({

      nombre: ['', Validators.required],
      director: ['', Validators.required],
      clasificacion: ['', Validators.required],
      anoEstreno: ['', [Validators.required, Validators.maxLength(6)]]

    })

  }


save(customerData) {

  this.apiService.crearPelicula(customerData).
    subscribe();
}

onSubmit(customerData) {
  this.submitted = true;

  // stop here if form is invalid
  if (this.form_add_movie.invalid) {
    return;
  }

  this.save(customerData);
  this.form_alta = true;

}

gotoList() {
  this.router.navigate(['list']);
}
// convenience getter for easy access to form fields
get f() { return this.form_add_movie.controls; }

}

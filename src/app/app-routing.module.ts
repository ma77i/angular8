import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { ListUserComponent } from './list-user/list-user.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';


const routes: Routes = [

  {path : 'login', component : LoginComponent},
  {path : '', component : LoginComponent},
  {path : 'list', component : ListUserComponent},
  {path: 'add', component: CreateMovieComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

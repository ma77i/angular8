import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { ListUserComponent } from './list-user/list-user.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [

  {path : 'login', component : LoginComponent},
  {path : '', component : LoginComponent},
  {path : 'list', component : ListUserComponent},
  {path: 'add', component: CreateMovieComponent },
  {path: 'salir', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

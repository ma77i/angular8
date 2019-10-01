import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  //Sirve para comunicarse con los servicios del backend
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';   
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListUserComponent } from './list-user/list-user.component'; 
import { ApiService } from './services/api.service';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUserComponent,
    CreateMovieComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SlimLoadingBarModule,
    ReactiveFormsModule    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

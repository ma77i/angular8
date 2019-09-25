import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  //Sirve para comunicarse con los servicios del backend
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';   
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListUserComponent } from './list-user/list-user.component'; 
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule  
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

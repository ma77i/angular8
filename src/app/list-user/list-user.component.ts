import { Component, OnInit  } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service'; //importo el servicio
import {Router} from "@angular/router";
import { User } from '../model/users';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
   usuario: User
 // @ViewChild(Router,{static: false}) hijo: LoginComponent;loginService:LoginService

  constructor(private LoginService: LoginService) { }

  ngOnInit() {
    this.LoginService.getUsers().subscribe((data:User)=>{
      
      this.usuario = data;
    });

  }

}

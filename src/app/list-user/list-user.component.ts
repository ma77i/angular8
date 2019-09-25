import { Component, OnInit,ViewChild  } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service'; //importo el servicio
import {Router} from "@angular/router";
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  @ViewChild(Router,{static: false}) hijo: LoginComponent;loginService:LoginService

  constructor() { }

  ngOnInit() {
  
  this.hijo.users;
  }

}

import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  usuarioLogueado = '';
 
  constructor(private authenticationService:AutenticacionService) { }

  ngOnInit() {

      
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();

    this.usuarioLogueado=this.authenticationService.getLoggedInUserName();
    
  }

  handleLogout() {
  
    this.authenticationService.logout();
  }

}

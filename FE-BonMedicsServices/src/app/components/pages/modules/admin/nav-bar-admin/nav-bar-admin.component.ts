import { Component } from '@angular/core';
import { RedirectService } from 'src/app/services/redirectService/redirect.service';
import { Routes } from 'src/app/Enums/ROUTES';

@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrls: ['./nav-bar-admin.component.css']
})
export class NavBarAdminComponent {

  constructor(private redirected:RedirectService){
    
  }

  redirectMain(e: Event){
    e.preventDefault();
    this.redirected.redirect(Routes.HOME);
  }
}

import { Component } from '@angular/core';
import { RedirectService } from 'src/app/services/redirectService/redirect.service';
import { Routes } from 'src/app/Enums/ROUTES';


@Component({
  selector: 'app-nav-bar-medic',
  templateUrl: './nav-bar-medic.component.html',
  styleUrls: ['./nav-bar-medic.component.css']
})
export class NavBarMedicComponent {
  constructor(private redirected:RedirectService){

  }

  redirectMain(e: Event){
    e.preventDefault();
    this.redirected.redirect(Routes.HOME);
  }
}

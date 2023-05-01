import { Component } from '@angular/core';
import { RedirectService } from 'src/app/services/redirectService/redirect.service';
import { Routes } from 'src/app/Enums/ROUTES';

@Component({
  selector: 'app-nav-bar-pacient',
  templateUrl: './nav-bar-pacient.component.html',
  styleUrls: ['./nav-bar-pacient.component.css'],
})
export class NavBarPacientComponent {

  constructor(private redirected: RedirectService) {}

  redirectMain(e: Event) {
    e.preventDefault();
    this.redirected.redirect(Routes.HOME);
  }
}

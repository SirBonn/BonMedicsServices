import { Component } from '@angular/core';
import { RedirectService } from 'src/app/services/redirectService/redirect.service';
import { Routes } from 'src/app/Enums/ROUTES';

@Component({
  selector: 'app-nav-bar-lab',
  templateUrl: './nav-bar-lab.component.html',
  styleUrls: ['./nav-bar-lab.component.css'],
})
export class NavBarLabComponent {
  constructor(private redirected: RedirectService) {}

  redirectMain(e: Event) {
    e.preventDefault();
    this.redirected.redirect(Routes.HOME);
  }
}

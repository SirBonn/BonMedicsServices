import { Component } from '@angular/core';
import { RedirectService } from 'src/app/services/redirectService/redirect.service';
import { Routes } from 'src/app/Enums/ROUTES';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private redirected:RedirectService){}

  ngOnInit(): void{}

  redirectMain(e: Event){
    e.preventDefault();
    this.redirected.redirect(Routes.HOME);
  }

  redirectLogin(e: Event) {
    e.preventDefault();
    this.redirected.redirect(Routes.LOGIN);
  }

  redirectSignup(e: Event){
    e.preventDefault();
    this.redirected.redirect(Routes.SINGUP);
  }
}

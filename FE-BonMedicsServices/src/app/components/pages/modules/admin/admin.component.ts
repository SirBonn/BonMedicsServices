import { Component } from '@angular/core';
import { Routes } from 'src/app/Enums/ROUTES';
import { usuario } from 'src/app/components/models/usuario';
import { LocalMemoryService } from 'src/app/services/localMemoryService/local-memory.service';
import { RedirectService } from 'src/app/services/redirectService/redirect.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  usuario: usuario;

  constructor(private redirected:RedirectService, private localMemo: LocalMemoryService){

    this.usuario = JSON.parse(`${this.localMemo.getItem('usuario')}`)
  }

  ngOnInit(): void {

  }
  redirectMain(e: Event){
    e.preventDefault();
    this.redirected.redirect(Routes.HOME);
  }
}


import { Component } from '@angular/core';
import { Routes } from 'src/app/Enums/ROUTES';
import { usuario } from 'src/app/components/models/usuario';
import { LocalMemoryService } from 'src/app/services/localMemoryService/local-memory.service';
import { RedirectService } from 'src/app/services/redirectService/redirect.service';

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',
  styleUrls: ['./medic.component.css']
})
export class MedicComponent {
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

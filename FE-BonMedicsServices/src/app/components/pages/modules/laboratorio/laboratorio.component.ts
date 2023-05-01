import { Component } from '@angular/core';
import { RedirectService } from 'src/app/services/redirectService/redirect.service';
import { Routes } from 'src/app/Enums/ROUTES';
import { LocalMemoryService } from 'src/app/services/localMemoryService/local-memory.service';
import { usuario } from 'src/app/components/models/usuario';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent {
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

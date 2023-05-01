import { Component } from '@angular/core';
import { APIs } from 'src/app/Enums/APIs';
import { HttpClient } from '@angular/common/http';
import { EncrypterService } from 'src/app/services/encrypService/encrypter.service';
import { usuario } from '../../models/usuario';
import { LocalMemoryService } from 'src/app/services/localMemoryService/local-memory.service';
import { Routes } from 'src/app/Enums/ROUTES';
import { RedirectService } from 'src/app/services/redirectService/redirect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario!: string;
  contrasena!: string;
  usuarioLoged: any;

  constructor(
    private http: HttpClient,
    private encrypter: EncrypterService,
    private localMemo: LocalMemoryService,
    private redirected: RedirectService
  ) {}

  submitForm() {
    let encContrasena = this.encrypter.encrypt(this.contrasena);

    let usuario = {
      username: this.usuario,
      password: encContrasena,
    };

    let body = JSON.stringify(usuario);

    this.http.post(APIs.LOGIN, body).subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
    );
  }

  ngOnInit() {
    this.http.get(APIs.LOGIN).subscribe((response) => {
      this.usuarioLoged = response;
    });
  }
}

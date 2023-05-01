import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { APIs } from 'src/app/Enums/APIs';
import { EncrypterService } from 'src/app/services/encrypService/encrypter.service';
import { LocalMemoryService } from 'src/app/services/localMemoryService/local-memory.service';
import { Routes } from 'src/app/Enums/ROUTES';
import { RedirectService } from 'src/app/services/redirectService/redirect.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  nombre!: string;
  username!: string;
  password!: string;
  CUI!: string;
  correo!: string;
  telefono!: string;
  direccion!: string;
  fechaNacimiento?: Date;
  userAcces!: number;

  constructor(
    private http: HttpClient,
    private encrypter: EncrypterService,
    private localMemo: LocalMemoryService,
    private redirected: RedirectService
  ) {}

  onSubmit() {
    let encContrasena = this.encrypter.encrypt(this.password);

    let usuario = {
      nombre: this.nombre,
      username: this.username,
      password: encContrasena,
      CUI: this.CUI,
      correo: this.correo,
      telefono: this.telefono,
      direccion: this.direccion,
      fechaNacimiento: this.fechaNacimiento,
      userAcces: this.userAcces,
    };

    let body = JSON.stringify(usuario);

    this.http.post(APIs.SIGNUP, body).subscribe((response: any) => {
      console.log(response);
    });
    this.localMemo.setItem(usuario, 'usuario');
    this.redirected.redirect(Routes.PAGEMODULES);
  }


}

import { Injectable } from '@angular/core';
import { usuario } from 'src/app/components/models/usuario';
import { HttpClient } from '@angular/common/http';
import { APIs } from 'src/app/Enums/APIs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  signup(usuario: usuario){
    return this.http.post(APIs.SIGNUP, usuario);
  }

    login(usuario: usuario){
      return this.http.post(APIs.LOGIN, usuario);
    }
}

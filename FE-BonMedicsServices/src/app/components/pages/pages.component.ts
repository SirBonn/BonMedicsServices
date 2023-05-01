import { Component, OnInit } from '@angular/core';
import { usuario } from '../models/usuario';
import { LocalMemoryService } from 'src/app/services/localMemoryService/local-memory.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit{
usuario: usuario;

constructor(private localMemo: LocalMemoryService){

  this.usuario = JSON.parse(`${this.localMemo.getItem('usuario')}`)
}

ngOnInit(): void {

}

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LocalMemoryRefService {

  constructor() { }

    getLocalMemory() {
      return getLocalMemory();
    }
}

function getLocalMemory() {
  return localStorage;
}
  
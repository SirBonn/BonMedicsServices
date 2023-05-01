import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncrypterService {

  private secretKey = 'SirBOtas'

  constructor() { }

  encrypt(value: string): string {
    const hash = CryptoJS.SHA256(value + this.secretKey);
    return hash.toString(CryptoJS.enc.Hex);
  }

}

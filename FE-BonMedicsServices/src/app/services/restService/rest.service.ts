import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  public get(url: string) {
    return this.http.get(url); //GET to API
  }

  public post(url:string, json: JSON){
    return this.http.post(url, json);
  }
}

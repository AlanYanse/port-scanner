import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TraeResultadoService {

  endpoint: string = "https://app-port-scanner.glitch.me/api/scanner";

  constructor(private _httpClient: HttpClient) { }

  getResultado(body: any): Observable<any>{
    //return this._httpClient.get<any>("https://app-port-scanner.glitch.me/");
    return this._httpClient.post<any>( this.endpoint, body);
  }

}
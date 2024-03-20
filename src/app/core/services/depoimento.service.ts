import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Depoimento } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoService {
  private urlBase:string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  Listar() : Observable<Depoimento[]>{
    return this.http.get<Depoimento[]>(`${this.urlBase}/Depoimentos`)
  }
}

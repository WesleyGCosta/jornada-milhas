import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UnidadeFederativa } from '../types/type';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {
  private apiUrl: string = environment.apiUrl
  private cache$?: Observable<UnidadeFederativa[]>;
  
  constructor(private http: HttpClient) { }

  Listar() : Observable<UnidadeFederativa[]>{
    if(!this.cache$){
      this.cache$ = this.requestEstados().pipe(shareReplay(1));
    }

    return this.cache$;
  }

  private requestEstados(): Observable<UnidadeFederativa[]> {
    return this.http.get<UnidadeFederativa[]>(`${this.apiUrl}/estados`);
  }

}

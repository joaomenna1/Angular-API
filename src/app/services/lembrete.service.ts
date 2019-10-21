import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lembrete } from '../interfaces/lembrete';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }

  //Metodo
  //Requesição a api com endpoint lembrete do verbo GET
  getListaLembretes(): Observable<Lembrete[]> {
    const url = `${environment.lembreteApiUrl}/lembrete`;
    return this.http.get<Lembrete[]>(url);
  }
  //Metodo
  //Requisição a api com endpoint lembrete com Id com verbo GET
  //Então, irá listar somente um lembrete em vez de varios.
  getLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/lembrete/${id}`;
    return this.http.get<Lembrete>(url);
  }
  //Metodo
  //Requisição a api com verbo POST, onde é criado um lembrete
  addLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/lembrete/`;
    return this.http.post<Lembrete>(url, lembrete);
  }
  //Metodo
  //Requisição a api com verbo PUT onde realiza o Update de um lembrete
  atualizaLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/lembrete/${lembrete.id}`;
    return this.http.put<Lembrete>(url, lembrete);
  }
  //Metodo
  //Requisição a api com verbo DELETE onde retirar um lembrete.
  deletaLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/lembrete/${id}`;
    return this.http.delete<Lembrete>(url);
  }
}

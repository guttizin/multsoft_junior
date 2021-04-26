import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from '../models/filme.models';

const baseUrl = 'http://localhost:8000/filmes';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Filme[]> {
    return this.http.get<Filme[]>(baseUrl);
  }

  get(id: any): Observable<Filme> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(nome: any): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${baseUrl}?title=${nome}`);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/filmes';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id:any) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data:any) {
    return this.http.post(baseUrl, data);
  }

  update(id:any, data:any) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id:any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(nome:string) {
    return this.http.get(`${baseUrl}?nome=${nome}`);
  }
}
import { Component, OnInit } from '@angular/core';
import { FilmeService } from 'src/app/services/filmes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from 'src/app/models/filme.models';

@Component({
  selector: 'app-filme-details',
  templateUrl: './filme-details.component.html',
  styleUrls: ['./filme-details.component.css']
})
export class FilmeDetailsComponent implements OnInit {
  currentFilme: Filme = {
    nome: '',
    resumo: '',
    disponivel: false
  };
  message = '';

  constructor(
    private filmeService: FilmeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getFilme(this.route.snapshot.params.id);
  }

  getFilme(id: string): void {
    this.filmeService.get(id)
      .subscribe(
        data => {
          this.currentFilme = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentFilme.nome,
      description: this.currentFilme.resumo,
      published: status
    };

    this.filmeService.update(this.currentFilme.id, data)
      .subscribe(
        response => {
          this.currentFilme.disponivel = status;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updateFilme(): void {
    this.filmeService.update(this.currentFilme.id, this.currentFilme)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteFilme(): void {
    this.filmeService.delete(this.currentFilme.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/filmes']);
        },
        error => {
          console.log(error);
        });
  }
}
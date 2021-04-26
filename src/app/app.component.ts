import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuOpened = false;

  listTitles = [
    {
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia',
      relevance: 98,
      age: 0,
      parts: 2,
      categories: ['Épico', 'Filme de Fantasia', 'Viagem no espaço']
    },
    {
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia',
      relevance: 55,
      age: 12,
      parts: 1,
      categories: ['Épico', 'Filme de Fantasia', 'Viagem no espaço']
    },
    {
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia',
      relevance: 100,
      age: 16,
      parts: 5,
      categories: ['Épico', 'Filme de Fantasia', 'Viagem no espaço']
    },
    {
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia',
      relevance: 100,
      age: 18,
      parts: 5,
      categories: ['Épico', 'Filme de Fantasia', 'Viagem no espaço']
    }
  ];

  setMenuState(state: boolean){
    this.menuOpened = state;
  }

  closeMenu(){
    this.menuOpened = false;
  }

}

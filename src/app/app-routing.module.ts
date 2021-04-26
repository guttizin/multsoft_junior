import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FilmesListComponent } from './components/filmes-list/filmes-list.component';
import { FilmeDetailsComponent } from './components/filme-details/filme-details.component';
// import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

const routes: Routes = [
  { path: '', redirectTo: 'filmes', pathMatch: 'full' },
  { path: 'filmes', component: FilmesListComponent },
  { path: 'filmes/:id', component: FilmeDetailsComponent },
  // { path: 'add', component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

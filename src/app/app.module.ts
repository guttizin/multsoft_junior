import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
// import { FullBannerComponent } from './shared/full-banner/full-banner.component';
// import { ListTitlesComponent } from './shared/list-titles/list-titles.component';
// import { FooterComponent } from './shared/footer/footer.component';
// import { TitleComponent } from './shared/title/title.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilmesListComponent } from './components/filmes-list/filmes-list.component';
import { FilmeDetailsComponent } from './components/filme-details/filme-details.component';

@NgModule({
  declarations: [
    AppComponent,
    // NavBarComponent,
    // FullBannerComponent,
    // ListTitlesComponent,
    // FooterComponent,
    // TitleComponent,
    FilmesListComponent,
    FilmeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes } from '@angular/router';
import {ListFilmComponent} from './list-film/list-film.component'
import { FilmItemComponent } from './film-item/film-item.component';
import { FilmDescriptionComponent } from './film-description/film-description.component';
export const routes: Routes = [
    { path: '', redirectTo: 'display-movies', pathMatch: 'full' },
    { path: 'display-movies' , component: ListFilmComponent },
    { path: 'display-movies/:id', component:FilmDescriptionComponent  }
    
];

import { Routes } from '@angular/router';
import {ListFilmComponent} from './list-film/list-film.component'
import { FilmItemComponent } from './film-item/film-item.component';
import { FilmDescriptionComponent } from './film-description/film-description.component';
import { SignComponent } from './sign/sign.component';
import path from 'path';
import { FavorisComponent } from './favoris/favoris.component';

export const routes: Routes = [
    { path: '', redirectTo: 'display-movies', pathMatch: 'full' },
    { path: 'display-movies' , component: ListFilmComponent },
    { path: 'display-movies/:id', component: FilmDescriptionComponent },
    {path: 'sign', component: SignComponent},
    {path:'favoris', component:FavorisComponent},
    { path: '**', redirectTo: 'display-movies'}
];

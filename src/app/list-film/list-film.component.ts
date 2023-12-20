import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmItemComponent } from '../film-item/film-item.component';
import { Film } from '../model/Film';
import { TmdbService } from '../services/tmdb.service';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-list-film',
  standalone: true,
  imports: [CommonModule, FilmItemComponent,NavbarComponent],
  templateUrl: './list-film.component.html',
  styleUrl: './list-film.component.css',
})
export class ListFilmComponent implements OnInit {
  films! : Film[];
  ngOnInit(): void {
    this.getFilms();
  }
  constructor (private tmdbService : TmdbService){}
  getFilms() {
    this.tmdbService.getAllMovies()
    .subscribe(
        (data: any) => {
          this.films = data.results; 
        },
        (error) => {
          console.error(error);
        }
      );
  }
  performSearch(searchTerm: string): void {
    // Logic to handle the search using the search term
    console.log('Performing search for:', searchTerm);
    // Add your search logic here
  }
}

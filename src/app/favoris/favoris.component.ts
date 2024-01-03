import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../model/Film';
import { TmdbService } from '../services/tmdb.service';
import { FilmItemComponent } from '../film-item/film-item.component';
import { FavoriesServices } from '../services/favoris.service';

@Component({
  selector: 'app-favoris',
  standalone: true,
  templateUrl: './favoris.component.html',
  styleUrl: './favoris.component.css',
  imports: [CommonModule, FilmItemComponent],
})
export class FavorisComponent {
  films: any[]=[];
  searchResults!: Film[];
  constructor(
    private tmdbService: TmdbService,
    private favorisService: FavoriesServices
  ) {}
  ngOnInit(): void {
    this.getFilms();
  }

  getFilms() {
    let userid = sessionStorage.getItem('userid');
    let f: any[];
    if (userid) {
      this.favorisService.getAllFilms(userid).subscribe(
        (response: any) => {
          
          console.log('List of users:', response);
          let f:any[];
          for (let i = 0; i < response.length; i++) {
            this.tmdbService.getMovieById(response[i].filmid).subscribe(
              (filmResponse: any) => {
                this.films.push(filmResponse)
                
              },
              (error: any) => {
                console.error(
                  'Error occurred while fetching film details:',
                  error
                );
              }
            );
          }
        },
        (error: any) => {
          console.error('Error occurred:', error);
        }
      );
    }
  }
  performSearch(searchTerm: string): void {
    // Logic to handle the search using the search term
    console.log('Performing search for:', searchTerm);
    // Add your search logic here
  }
  updateDisplayedFilms() {
    // Check if there are search results, if so, display them; otherwise, display default films
    this.films =
      this.searchResults.length > 0 ? this.searchResults : this.films;
  }
}

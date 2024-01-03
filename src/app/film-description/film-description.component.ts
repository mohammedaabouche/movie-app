import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../model/Film';
import { RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';
import { ListFilmComponent } from '../list-film/list-film.component';
import { TmdbService } from '../services/tmdb.service';
import { FavoriesServices } from '../services/favoris.service';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-film-description',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './film-description.component.html',
  styleUrl: './film-description.component.css',
  providers: [FavoriesServices, AuthService, SharedService],
})
export class FilmDescriptionComponent implements OnInit {
  @Input() film: Film | undefined;

  films!: Film[];
  userid!: string;
  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService,
    private favoriesService: FavoriesServices,
    private sharedService: SharedService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const filmId = parseInt(params['id']);
      this.tmdbService.getMovieById(filmId).subscribe((data: any) => {
        this.film = data;
      });
    });
  }
  isFilmInFavorites(): boolean {
    console.log('Checking if film is in favorites:', this.favoriesService.getFilm(this.userid,this.film?.id||0));
    return  this.favoriesService.getFilm(this.userid,this.film?.id||0)
  }
  addFilmToFavorites(film: Film | undefined): void {
    console.log('Adding film to favorites:', film);
    if (!film) {
      console.error('No film provided!');
      return;
    }
    // Retrieving data from sessionStorage
    const userid = sessionStorage.getItem('userid');
    if (!userid) {
      console.error('No userid found in sessionStorage!');
      return;
    }

    this.favoriesService.addFilmToFavorites(film, userid).subscribe((film) => {
      console.log('Added film to favorites:', film);
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../model/Film';
import { RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';
import { ListFilmComponent } from '../list-film/list-film.component';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-film-description',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './film-description.component.html',
  styleUrl: './film-description.component.css',
  providers: [ListFilmComponent],
})
export class FilmDescriptionComponent implements OnInit {
  @Input() film: Film | undefined;
  constructor(
    private route: ActivatedRoute,
    private  tmdbService: TmdbService,
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      
      const filmId = parseInt(params['id']);
      this.tmdbService.getMovieById(filmId).subscribe((data: any) => {
        this.film = data;
        console.log(this.film);
      } );
      
    });
  }

}

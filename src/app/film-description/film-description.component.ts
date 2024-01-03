import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../model/Film';
import { RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';
import { ListFilmComponent } from '../list-film/list-film.component';
import { TmdbService } from '../services/tmdb.service';
import { FavoriesServices } from '../services/favoris.service';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';
import { CommentsComponent } from '../comments/comments.component';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-film-description',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet,CommentsComponent],
  templateUrl: './film-description.component.html',
  styleUrl: './film-description.component.css',
  providers: [FavoriesServices, AuthService, SharedService],
})
export class FilmDescriptionComponent implements OnInit {
  @Input() film: Film | undefined;
  comments:any[]=[];
  films!: Film[];
  userid!: string;
  filmid!: number;
  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService,
    private favoriesService: FavoriesServices,
    private sharedService: SharedService,
    private commentService: CommentService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const filmId = parseInt(params['id']);
      this.filmid = filmId;
      this.tmdbService.getMovieById(filmId).subscribe((data: any) => {
        this.film = data;
      });
    });
    this.getComments();
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

  getComments(): void {
    console.log('Fetching comments for film ID:', this.filmid);
    this.commentService.getCommentsByFilmId(this.filmid).subscribe(
      (response) => {
        console.log('Comments for film ID', this.filmid, ':', response);
        this.comments = response;
      },
      (error) => {
        console.error('Error fetching comments:', error);
      }
    );
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterLink, FormsModule,CommonModule],
  providers: [TmdbService],
})
export class NavbarComponent {
  @Output() searchEmitter: EventEmitter<string> = new EventEmitter<string>();
  query = '';
  searchResults: any[] = [];
  @Input() signedIn!: boolean;
  constructor(
    private searchService: SearchService,
    private tmdbService: TmdbService
  ) {}
  ngOnInit(): void {
    if (sessionStorage.getItem('signedIn') === 'true') {
      this.signedIn = true;
    } else {
      this.signedIn = false;
    }
    console.log('signedIn', this.signedIn);
  }
  searchMovies() {
    this.tmdbService.searchMovies(this.query).subscribe(
      (data: any) => {
        this.searchResults = data.results;
        this.searchService.updateSearchResults(this.searchResults);
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }
  signOut(){
    sessionStorage.removeItem("userid");
    sessionStorage.setItem("signedIn","false");
    setTimeout(() => {
      location.reload();
    }, 100);
  }
}

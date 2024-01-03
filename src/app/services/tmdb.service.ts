import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  baseUrl = 'https://api.themoviedb.org/3/movie/popular';
  apiKey = '56753d778f609fd0ca63cd3a10a503f6';

  constructor(private httpclient:HttpClient) {  }
  getAllMovies(){
    return this.httpclient.get(`${this.baseUrl}?api_key=${this.apiKey}`)
  }
  getMovieById(id: any) {
    return this.httpclient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`);
  }
  searchMovies(query: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.httpclient.get(url);
  }
  
}



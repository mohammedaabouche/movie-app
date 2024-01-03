import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Film } from '../model/Film';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriesServices {
  private apiUrl = 'http://localhost:8080'; // Adjust URL according to your Spring Boot endpoint

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllFilms(userid:string): any {
    return this.http.post<any[]>(`http://localhost:8080/get`,userid)

  }

  addFilmToFavorites(film: Film, userid:any): Observable<number> {
    console.log('Adding film to favorites:', film.id);
    return this.http.post<number>(`http://localhost:8080/add`, {
      filmid: film.id,
      user: userid,
    });
  }

  getFilm(userid:string ,filmid:number){
    this.http.post<any>('http://localhost:8080/getfilm', { filmid, user: userid }).subscribe((data) => {
      console.log(data);

    }
    );
    return false;
    
  }
  
}

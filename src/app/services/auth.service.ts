import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:8080'; // L'URL de votre API d'authentification
  private messageSource = new BehaviorSubject<string>('');
  private sharedValueSource = new BehaviorSubject<string>('gfchvjb');
  sharedValue$ = this.sharedValueSource.asObservable();

  updateSharedValue(newValue: string) {
    this.sharedValueSource.next(newValue);
  }
  constructor(private http: HttpClient) { }

  signUp(userData: any): Observable<any> {
    console.log('Adding user:', userData);
    return this.http.post<number>(`http://localhost:8080/signup`, userData );
  }

  signIn(credentials: { email: string; password: string }): Observable<any> {
    console.log(' user:',credentials);
    return this.http.post<number>(`http://localhost:8080/signin`, { fullName: "a", email: credentials.email, password: credentials.password } );
  }

  
}

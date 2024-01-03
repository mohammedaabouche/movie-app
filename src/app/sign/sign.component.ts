import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css',
  providers: [AuthService, SharedService],
})
export class SignComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private sharedService: SharedService
  ) {}
  onSignUp(signUpForm: NgForm) {
    if (signUpForm.valid) {
      this.authService.signUp(signUpForm.value).subscribe(
        (response) => {
          // Traitement de la réponse
          console.log('Inscription réussie:', response);
          // Gérer la réponse ou rediriger l'utilisateur
        },
        (error) => {
          // Gérer les erreurs
          console.error("Erreur lors de l'inscription:", error);
        }
      );
    }
  }
  onSignIn(signInForm: NgForm) {
    if (signInForm.valid) {
     
     
      this.authService.signIn(signInForm.value).subscribe(
        (response) => {
          // Traitement de la réponse

          if (response.status === 200) {
            this.router.navigate(['/display-movies']); // Replace '/dashboard' with your desired route
          }
          // Gérer la réponse ou rediriger l'utilisateur
        },
        (error) => {
          // Gérer les erreurs
          if (error.status === 200) {
            this.router.navigate(['/display-movies']); // Replace '/dashboard' with your desired route
            sessionStorage.setItem('userid', signInForm.value.email);
            sessionStorage.setItem('signedIn', "true");
          }
          console.error("Erreur lors de l'inscription:", error);
        }
      );
    }
  }
}

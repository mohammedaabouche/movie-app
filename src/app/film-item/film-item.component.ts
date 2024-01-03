import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../model/Film';
import { routes } from '../app.routes';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-film-item',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './film-item.component.html',
  styleUrl: './film-item.component.css'
})
export class FilmItemComponent {
  @Input() film: Film|undefined;
  @Input() isFav: Boolean|undefined;
}

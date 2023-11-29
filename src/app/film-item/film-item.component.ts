import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../model/Film';

@Component({
  selector: 'app-film-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-item.component.html',
  styleUrl: './film-item.component.css'
})
export class FilmItemComponent {
  @Input() film: Film|undefined;
  
}

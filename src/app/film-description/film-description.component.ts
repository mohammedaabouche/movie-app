import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../model/Film';

@Component({
  selector: 'app-film-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-description.component.html',
  styleUrl: './film-description.component.css'
})
export class FilmDescriptionComponent {
  @Input() film :Film|undefined;
}

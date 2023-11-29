import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmItemComponent } from '../film-item/film-item.component';
import { Film } from '../model/Film';
import { FilmDescriptionComponent } from '../film-description/film-description.component';
@Component({
  selector: 'app-list-film',
  standalone: true,
  imports: [CommonModule, FilmItemComponent,FilmDescriptionComponent],
  templateUrl: './list-film.component.html',
  styleUrl: './list-film.component.css'
})
export class ListFilmComponent {
  films:Array<Film> = [
    {
      id:1,
      vote_average: 10,
      title: "harrry potter",
      poster_path:"../../assets/harry-potter.jpeg",
      original_title: "harry potter",
      release_date: "2010-10-10",
      overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan risus eget quam placerat, a ultrices metus congue. Vivamus euismod velit nec libero fermentum, at fermentum velit faucibus. Donec efficitur"
      
      
    }
    ,
    {
      id:2,
      vote_average: 9,
      title: "mission impossible",
      poster_path: "../../assets/mission-impossible.jpeg",
      original_title: "mission impossible",
      release_date: "2010-10-10",
      overview: "nadi film d'action",
    }
    ,
    {
      id:3,
      vote_average: 8,
      title: "avengers",
      poster_path: "../../assets/avengers.jpeg",
      original_title: "avengers",
      release_date: "2010-10-10",
      overview: "nadi film d'action",
      
    }
    ,
    {
      id:4,
      vote_average: 7,
      title: "star wars",
      poster_path: "../../assets/star-wars.jpeg",
      original_title: "joker",
      release_date: "2010-10-10",
      overview: "nadi film d'action",
    }

  ]


}

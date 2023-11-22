import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-film',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-film.component.html',
  styleUrl: './list-film.component.css'
})
export class ListFilmComponent {
  films:Array<any> = [
    {
      id:1,
      titre:"mission impossible",
      annee:2023,
      description:"film d'action naaadi",
      imageURL:"../../assets/images/mission-impossible.jpeg"
    }
    ,
    {
      id:2,
      titre:"harry potter",
      annee:2010,
      description:"film d'action naaadi",
      imageURL:"../../assets/images/harry-potter.jpeg"
    }
    ,
    {
      id:3,
      titre:"star wars",
      annee:2019,
      description:"film d'action naaadi",
      imageURL:"../../assets/images/star-wars.jpeg"
    }
    ,
    {
      id:4,
      titre:"avengers",
      annee:2018,
      description:"film d'action naaadi",
      imageURL:"../../assets/images/avengers.jpeg"
    }

  ]


}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() searchEmitter: EventEmitter<string> = new EventEmitter<string>();

  onSearch(searchTerm: string): void {
    this.searchEmitter.emit(searchTerm);
  }
}

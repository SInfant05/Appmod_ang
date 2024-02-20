import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
 // templateUrl: './books.component.html',
  template:`
  <h2>{{ title }}</h2>
  <ul>
  <li *ngFor="let b1 of books">
    {{b1}}
  </li>
  </ul>
  `,
  styleUrl: './books.component.css'
})
export class BooksComponent {
  title= "list of books";
  books =["b1","b2","b3","b4"];

}

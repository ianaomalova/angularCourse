import { Component } from '@angular/core';
export interface Post {
  title: string,
  text: string,
  [key: string]: string; // Индексная сигнатура
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  search = '';
  searchField = 'title';

  posts: Post[] = [
    {title: 'Beer', text: 'Самое лучшее пиво в городе'},
    {title: 'Wine', text: 'Самое лучшее вино в мире'},
    {title: 'Bread', text: 'Хлеб да каша пища наша'}
  ]
}

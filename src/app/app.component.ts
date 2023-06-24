import { Component } from '@angular/core';
export interface Post {
  title: string,
  text: string,
  id?: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Я хочу выучить Angular', text: 'Я все еще учу Angular', id: 2},
    {title: 'Следующий урок', text: 'Будет про директивы и про пайпы', id: 3}
  ];
  updatePosts(post: Post) {
    this.posts.unshift(post);
    console.log(post);
  }

  removePost(id: number) {
    console.log(id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
}

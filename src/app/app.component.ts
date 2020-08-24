import { Component } from '@angular/core';
import {Post} from './Posts/post.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Storedposts: Post[] = [];
  postAdded(post) {
    this.Storedposts.push(post);
  }
}

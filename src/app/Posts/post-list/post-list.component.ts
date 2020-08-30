import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { postService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First', content: 'This is first content'},
  //   {title: 'Second', content: 'This is second content'},
  //   {title: 'Third', content: 'This is first content'}

  // ]

  posts: Post[] = [];
  servicePost: Subscription;

  constructor(public postService: postService) {}

  ngOnInit(): void {
    this.postService.getPosts();
    this.servicePost = this.postService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  ngOnDestroy(): void {
    this.servicePost.unsubscribe();
  }
  onDelete(postId: string) {
    this.postService.deletePost(postId);
  }
}

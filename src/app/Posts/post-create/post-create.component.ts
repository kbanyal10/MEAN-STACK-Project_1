import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { postService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  postTitle = '';
  postContent = '';

  constructor(public postService: postService) {}

  onSubmit(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }

    this.postService.addPost(postForm.value.title, postForm.value.content);
    postForm.resetForm();
  }
}

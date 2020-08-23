import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
// posts = [
//   {title: 'First', content: 'This is first content'},
//   {title: 'Second', content: 'This is second content'},
//   {title: 'Third', content: 'This is first content'}

// ]

posts = [];

  constructor() { }

  ngOnInit(): void {
  }

}

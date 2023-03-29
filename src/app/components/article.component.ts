import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass'],
})
export class ArticleComponent implements OnInit {
  data: any;
  constructor(private myPostService: PostService) {}
  title = 'testTask';

  ngOnInit(): void {
    this.myPostService.getPosts().subscribe((data) => {
      this.data = data;
    });
  }
}

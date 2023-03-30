import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass'],
})
export class ArticleComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Input() searchRequest: string = 'search';
  @Input() category: string = 'general';
  @Input() country: string = 'us';
  @Input() isEverything: boolean = false;
  data: any;
  constructor(private myPostService: PostService) {}
  title = 'testTask';

  ngOnInit(): void {
    if (this.isEverything) {
      this.myPostService
        .getPosts(this.currentPage, this.searchRequest)
        .subscribe((data) => {
          this.data = data;
        });
    } else {
      this.myPostService
        .getTopPosts(this.category, this.country, this.currentPage)
        .subscribe((data) => {
          this.data = data;
        });
    }
  }
  ngOnChanges(): void {
    this.ngOnInit();
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() totalPagesCount: number = 1;
  @Input() isEverything: boolean = false;
  @Output() setTotalPagesCount = new EventEmitter<number>();
  data: any = 'loading';
  constructor(private myPostService: PostService) {}
  title = 'testTask';

  ngOnInit(): void {
    this.data = 'loading';
    if (this.isEverything) {
      this.myPostService
        .getPosts(this.currentPage, this.searchRequest)
        .subscribe(
          (data) => {
            console.log(data);
            this.data = data;
            if (this.data.ok == false) this.data = 'error';
            this.setTotalPagesCount.emit(Math.ceil(this.data.totalResults / 4));
          },
          (err) => {
            this.data = 'error';
          }
        );
    } else {
      this.data = 'loading';
      this.myPostService
        .getTopPosts(this.category, this.country, this.currentPage)
        .subscribe(
          (data) => {
            this.data = data;
            this.setTotalPagesCount.emit(Math.ceil(this.data.totalResults / 4));
          },
          (err) => {
            this.data = 'error';
          }
        );
    }
  }
  ngOnChanges(): void {
    this.ngOnInit();
  }
}

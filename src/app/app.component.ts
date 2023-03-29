import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  posts: any;
  currentPage: number = 1;
  searchRequest: string = 'apple';
  changePage(page: number): void {
    this.currentPage = page;
    console.log(page);
  }
  changeSearchRequest(request: string): void {
    this.searchRequest = request;
    console.log(this.searchRequest);
  }
}

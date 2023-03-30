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
  isEverything: boolean = false;
  totalPagesCount: number = 1;
  category: string = 'general';
  country: string = 'us';
  changePage(page: number): void {
    this.currentPage = page;
    console.log(page);
  }
  changeSearchRequest(request: string): void {
    this.searchRequest = request;
    this.changePage(1);
  }
  changeCurrentCategory(category: string) {
    this.category = category;
    this.changePage(1);
  }
  changeCurrentCountry(country: string) {
    this.country = country;
    this.changePage(1);
  }
  setTotalPagesCount(count: number) {
    this.totalPagesCount = count;
  }
}

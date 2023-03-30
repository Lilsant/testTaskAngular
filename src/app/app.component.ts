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
  category: string = 'general';
  country: string = 'us';
  changePage(page: number): void {
    this.currentPage = page;
    console.log(page);
  }
  changeSearchRequest(request: string): void {
    this.searchRequest = request;
    console.log(this.searchRequest);
  }
  changeCurrentCategory(category: string) {
    this.category = category;
  }
  changeCurrentCountry(country: string) {
    this.country = country;
  }
}

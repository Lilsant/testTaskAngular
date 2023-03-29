import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  posts: any;
  currentPage: number = 1;
  changePage(page: number): void {
    this.currentPage = page;
  }
}

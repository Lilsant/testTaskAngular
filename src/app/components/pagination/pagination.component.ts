import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass'],
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Output() changePage = new EventEmitter<number>();
  nextPage(): number {
    return this.currentPage + 1;
  }
  prevPage() {
    if (this.currentPage == 1) return this.currentPage;
    else return this.currentPage - 1;
  }
}

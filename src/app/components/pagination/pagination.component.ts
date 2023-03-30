import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass'],
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPagesCount: number = 1;
  @Output() changePage = new EventEmitter<number>();
  pages: number[] = this.countPages();
  nextPage(): number {
    if (this.currentPage == this.totalPagesCount) return this.currentPage;
    return this.currentPage + 1;
  }
  prevPage() {
    if (this.currentPage == 1) return this.currentPage;
    else return this.currentPage - 1;
  }
  ngOnChanges() {
    console.log(this.totalPagesCount);
    this.pages = this.countPages();
  }
  countPages(): number[] {
    let arr = [];
    if (this.currentPage <= 3) {
      if (this.totalPagesCount >= 5)
        for (let i = 1; i <= 5; i++) {
          arr.push(i);
        }
      else
        for (let i = 1; i <= this.totalPagesCount; i++) {
          arr.push(i);
        }
    } else if (this.currentPage + 2 >= this.totalPagesCount) {
      let foo = this.totalPagesCount - this.currentPage;
      for (
        let i = this.currentPage - (4 - foo);
        i <= this.totalPagesCount;
        i++
      ) {
        console.log(i);
        arr.push(i);
      }
    } else {
      for (let i = -2; i <= 2; i++) {
        arr.push(this.currentPage + i);
      }
    }
    // for(let i =0; i<=4; i++) {
    //   arr.push(this.currentPage+i);
    // }
    return arr;
  }
  onNumberClick(ev: any) {
    this.changePage.emit(parseInt(ev.target.innerText, 10));
  }
}

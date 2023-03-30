import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass'],
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Output() changePage = new EventEmitter<number>();
  pages: number[] = this.countPages();
  nextPage(): number {
    return this.currentPage + 1;
  }
  prevPage() {
    if (this.currentPage == 1) return this.currentPage;
    else return this.currentPage - 1;
  }
  ngOnChanges() {
    this.pages = this.countPages();
  }
  countPages() : number[] {
      let arr = [];
      if(this.currentPage <= 3) 
        for(let i =1; i<=5; i++) {
          arr.push(i);
      }
      else {
        arr.push(this.currentPage-2);
        arr.push(this.currentPage-1);
        arr.push(this.currentPage);
        arr.push(this.currentPage+1);
        arr.push(this.currentPage+2);
      }
      // for(let i =0; i<=4; i++) {
      //   arr.push(this.currentPage+i);
      // }
      return arr;
  }
  onNumberClick(ev : any) {
    this.changePage.emit(parseInt(ev.target.innerText, 10));
  }
}

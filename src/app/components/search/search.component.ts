import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent {
  @Input() searchRequest: string = 'search';
  @Output() changeSearchRequest = new EventEmitter<string>();
  req: string = this.searchRequest;
  changeReq(e: any) {
    this.req = e.target.value;
    console.log(this.req);
  }
}

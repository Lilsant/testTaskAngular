import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass'],
})
export class FiltersComponent {
  @Input() country: string = 'Russia';
  @Input() category: string = 'business';
  @Output() changeCurrentCategory = new EventEmitter<string>();
  @Output() changeCurrentCountry = new EventEmitter<string>();
  categories: string[] = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];
  countries: string[] = [
    'Russia',
    'United States',
    'Great Britan',
    'China',
    'Japan',
  ];

  isCategoryOpen: boolean = false;
  isCountryOpen: boolean = false;
  changeCategoryVisible() {
    this.isCategoryOpen = !this.isCategoryOpen;
  }
  changeCategoryValue(ev: any) {
    this.category = ev.target.innerText;
    this.changeCurrentCategory.emit(this.category);
    this.changeCategoryVisible();
  }
  changeCountryVisible() {
    this.isCountryOpen = !this.isCountryOpen;
  }
  changeCountryValue(ev: any) {
    let currentCountry: string = '';
    switch (ev.target.innerText) {
      case 'Russia':
        currentCountry = 'ru';
        break;
      case 'Japan':
        currentCountry = 'jp';
        break;
      case 'United States':
        currentCountry = 'us';
        break;
      case 'Great Britan':
        currentCountry = 'gb';
        break;
      case 'China':
        currentCountry = 'ch';
        break;
    }
    this.country = currentCountry;
    this.changeCurrentCountry.emit(this.country);
    this.changeCountryVisible();
  }
}

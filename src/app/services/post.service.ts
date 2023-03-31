import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiKey: string = 'c36c7ff39e98442f9a094f6226eb3988';
  constructor(private http: HttpClient) {}
  getPosts(pageNumber: number, searchRequest: string) {
    return this.http.get(
      `https://newsapi.org/v2/everything?q=${searchRequest}&pageSize=4&page=${pageNumber}&apiKey=${this.apiKey}`
    );
  }
  getTopPosts(category: string, country: string, pageNumber: number) {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=4&page=${pageNumber}&apiKey=${this.apiKey}`
    );
  }
}

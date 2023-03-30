import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  getPosts(pageNumber: number, searchRequest: string) {
    return this.http.get(
      `https://newsapi.org/v2/everything?q=${searchRequest}&pageSize=4&page=${pageNumber}&apiKey=6b5d306006d54ba797dbdf1643b40930`
    );
  }
  getTopPosts(category: string, country: string, pageNumber: number) {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=4&page=${pageNumber}&apiKey=6b5d306006d54ba797dbdf1643b40930`
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  getPosts(pageNumber: number, searchRequest: string) {
    return this.http.get(
      `https://newsapi.org/v2/everything?q=${searchRequest}&pageSize=4&page=${pageNumber}&apiKey=afe650beed5a403da79deaa9089bc6e4`
    );
  }
}

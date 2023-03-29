import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get(
      'https://newsapi.org/v2/everything?q=Apple&apiKey=afe650beed5a403da79deaa9089bc6e4'
    );
  }
}

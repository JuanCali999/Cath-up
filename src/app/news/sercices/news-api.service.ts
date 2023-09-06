import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey = "7f913d45aa5640c0b204ff5260e009e4";
  baseUrl ="https://newsapi.org/v2/top-headlines"
  constructor(private http:HttpClient) { }
  getSources() {
    return this.http.get(`${this.baseUrl}/sources?apikey=${this.apiKey}`)
  }
  getArticlesBySourceId(sourceId: string){
    return this.http.get(`${this.baseUrl}?source=${sourceId}&apiKey=${this.apiKey}`);
  }
  initArticle(){
    return this.getArticlesBySourceId('bbc-news');
  }
}

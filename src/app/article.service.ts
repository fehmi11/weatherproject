import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private _http:HttpClient) { }

  getNews():Observable<any>{
    return this._http.get<any>("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8352f46398db4d279354e1a2263d16d8");
  }
}



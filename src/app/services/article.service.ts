import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  selectedArticle: Article ;
  readonly url_api: string;
  articles: Article[];

  constructor(private http: HttpClient) {
    this.selectedArticle=new Article();
      /*new Article(" ", " "," ", 0,0)
    ];*/
    this.url_api='http://localhost:3000/api/articles';
    this.articles=[];

   }
   getArticles(){
     return this.http.get(this.url_api);
   }
   postArticles(Article: Article){
    return this.http.post(this.url_api, Article);
   }
   putArticles(article: Article){
    return this.http.put(this.url_api + `/${article._id}`, article);
   }

   
}

import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public selectedArticle : Article;
  constructor() {
    this.selectedArticle=new Article();


   }

  ngOnInit(): void {
  }

}

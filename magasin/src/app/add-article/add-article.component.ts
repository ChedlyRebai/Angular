import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
@Component({
 selector: 'app-add-article',
 templateUrl: './add-article.component.html',
 styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
 newArticle = new Article();
 constructor(private articleService: ArticleService ) { }
 addArticle(){
 this.articleService.ajouterArticle(this.newArticle);
 }
 ngOnInit(): void {
 }
}

import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
@Component({
 selector: 'app-articles',
 templateUrl: './articles.component.html',
 styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
 tab_art : Article[];
 constructor(private articleService: ArticleService ) {
 this.tab_art = articleService.listeArticles();
 }
 ngOnInit(): void {
}

zeroStyle = {'color':'red'};
suppArticle(art: Article){
  let conf = confirm("Etes-vous sûr de vouloir supprimer cet article ?");
  if (conf) {
  this.articleService.supprimerArticle(art);
  console.log("Suppression avec succes :"+art.libelle);
  }
  }
}

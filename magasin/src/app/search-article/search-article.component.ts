import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article.model';
import { Categorie } from '../model/categorie.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.css']
})
export class SearchArticleComponent implements OnInit {

articles! : Article[];
libArticle! : string;
code!:number;
categRech! : number;
categories! : Categorie[];
  tab_art: Article[];
constructor(private articleService: ArticleService ) {
this.tab_art = articleService.listeArticles();
}

chercherParLib(lib : string){
  this.tab_art = this.articleService.listeArticles();
  this.tab_art = this.tab_art.filter(art => art.libelle?.toLowerCase().includes(lib.toLowerCase()));
}
chercherParcode(){
  this.tab_art = this.articleService.listeArticles();
  this.tab_art = this.tab_art.filter(art => art.codea?.toString().includes(this.code.toString()));
}

critere! : string;
chercherParCateg() {
  this.tab_art = this.articleService.listeArticles();
  this.tab_art = this.tab_art.filter(art => art.categ?.codec ==
  this.categRech);
  }
reset(){
  this.tab_art = this.articleService.listeArticles();
  }

ngOnInit(): void {
  this.categories = this.articleService.listeCategories();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
@Component({
selector: 'app-update-article',
templateUrl: './update-article.component.html',
styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
articleCourant = new Article();
constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) { }
modifArticle(){
     this.articleService.modifierArticle(this.articleCourant);
      console.log("Article modifié avec succes : "+
    this.articleCourant.libelle+":"+this.articleCourant.prix+"DT, qté="+
       this.articleCourant.qte+", ajoutée le "+this.articleCourant.dateAjout);
}
ngOnInit(): void {
       this.articleCourant = this.articleService.consulterArticle
     (this.activatedRoute.snapshot.params['id']);
console.log("Code article à modifier "+this.articleCourant.codea);
}
}

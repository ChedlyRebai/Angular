import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article.model';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles : Article[];
  constructor() {
    this.articles = [
      {codea : 1, libelle : "Souris Wifi", prix : 39.100, qte : 8,dateAjout : new Date("09/27/2022")},
      {codea : 2, libelle : "Clavier Gaming", prix : 45.900, qte :11, dateAjout : new Date("09/30/2022")},
      {codea : 3, libelle : "Manette de jeu", prix : 26, qte : 5,dateAjout : new Date("10/02/2022")}
    ];
  }

  ngOnInit(): void {
  }

}

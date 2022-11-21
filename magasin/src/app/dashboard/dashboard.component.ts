import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nbArt = 0;
  nbCateg = 0;
  totalStock = 0;
  nbUsers = 0;

  constructor(private artServ : ArticleService) {
  this.nbArt = this.artServ.calculNbArticles();
  this.nbCateg = this.artServ.calculNbCategories();
  this.totalStock = this.artServ.calculTotalStock();
  }
  ngOnInit(): void { }
  }

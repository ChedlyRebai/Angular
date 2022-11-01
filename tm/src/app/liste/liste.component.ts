import { etudiant } from './../model/etudiant.model';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  tab_art : etudiant[];
 constructor(private sharedService: SharedService ) {
 this.tab_art = sharedService.listeArticles();
 }
 ngOnInit(): void {
}
suppArticle(art: etudiant){
  let conf = confirm("Etes-vous sûr de vouloir supprimer cet article ?");
  if (conf) {
  this.sharedService.supprimerArticle(art);
  console.log("Suppression avec succes :"+art.nom);
  }
  }
}

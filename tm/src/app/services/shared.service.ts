import { etudiant } from './../model/etudiant.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  [x: string]: any;
 tab_art : etudiant[];
 constructor() {
 this.tab_art = [{id : 1, nom : "Souris Wifi", moyenne : 39.100, decision : "8",
 classe:"chedly rebai"},
];
 }


 listeArticles():etudiant[] {
 return this.tab_art;
 }


 ajouterArticle(art: etudiant){
  this.tab_art.push(art);
  console.log("Ajout avec succes : "+art.nom);
  }


  supprimerArticle(art: etudiant){
    const index = this.tab_art.indexOf(art, 0);
    if (index > -1) {
    this.tab_art.splice(index, 1);
    }
   }
}

import { etudiant } from './../model/etudiant.model';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-ajoute',
  templateUrl: './ajoute.component.html',
  styleUrls: ['./ajoute.component.css']
})
export class AjouteComponent implements OnInit {
 /*etudiants:etudiant[] =[]
 num:number =0;
  etudiantf={
    id:0,
    nom:'',
    prenom:'',
    classe:'',
    moyenne:0
  }

  ajoute(){
    this.etudiants.push(this.etudiantf);
    this.num++;
    this.etudiantf={
    id:this.num,
    nom:'',
    prenom:'',
    classe:'',
    moyenne:0
    }
    console.log(this.etudiants);
localStorage.setItem('etudiants',JSON.stringify(this.etudiants))
  }

 constructor() {
     this.etudiants = [
        {id : 1, nom : "houssem", prenom:"hammemi", classe:"dsi21",moyenne:13},
        {id : 2, nom : "chaima", prenom:"mbarki", classe:"dsi21",moyenne:13},
        {id : 3, nom : "amal", prenom:"hamdi", classe:"dsi21",moyenne:9},
     ];
  }
  ngOnInit(): void {

    }*/

  newetudiant = new etudiant();
 constructor(private sharedService: SharedService ) { }
 addArticle(){
 this.sharedService.ajouterArticle(this.newetudiant);
 }
 ngOnInit(): void {
 }


}

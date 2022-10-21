import { etudiant } from './../model/etudiant.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ajoute',
  templateUrl: './ajoute.component.html',
  styleUrls: ['./ajoute.component.css']
})
export class AjouteComponent implements OnInit {
 etudiants:etudiant[] =[]
 num:number =3;
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
    //console.log(this.etudiants);
    localStorage.setItem('etudiants',JSON.stringify(this.etudiants))
  }

 constructor() {
    this.etudiants = [
      {id : 1, nom : "Souris Wifi", prenom:"rebai", classe:"dsi"},
      {id : 2, nom : "Souris Wifi", prenom:"rebai", classe:"dsi21"},
      {id : 3, nom : "Souris Wifi", prenom:"rebai", classe:"dsi22"},
    ];
  }
  ngOnInit(): void {

    }

}

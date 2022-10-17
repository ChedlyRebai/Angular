import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})


export class InfoComponent implements OnInit {
  coordonnees = {
  nom : 'Sonia Guerbouj',
  email : 'guerbouj_sonya@yahoo.fr',
  tel : '22 333 444'
  };
  etat : boolean = false ;
  constructor() { }
  ngOnInit(): void {
  }
  txt : string = "Event Binding Example" ;
  modifText() {
  this.txt = " Exemple de liaison d’évènement" ;
}

  changer(){
    this.etat = !this.etat;
  }
  }

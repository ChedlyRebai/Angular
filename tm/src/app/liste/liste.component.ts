import { etudiant } from './../model/etudiant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  etudiants:etudiant[] =[]

  constructor() { }

  ngOnInit(): void {
    let data=localStorage.getItem(JSON.parse("etudiants"))
    console.log(data)
  }

}

import { etudiant } from './../model/etudiant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  etudiants:etudiant[] =[]

datas:any;
  constructor() { }




  ngOnInit(): void {
    let data:any=localStorage.getItem('etudiants')
    this.datas=JSON.parse(data)
  }

  supprimer(index:number){

  }
  clear(){
    localStorage.clear()
    this.ngOnInit();
  }
}

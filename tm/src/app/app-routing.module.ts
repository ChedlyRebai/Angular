import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ListeComponent } from './liste/liste.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjouteComponent } from './ajoute/ajoute.component';


import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  } from "module";

const routes: Routes = [
  {path:"" ,redirectTo:'/accueil',pathMatch:"full"},
  {path:"ajoute",component:AjouteComponent},
  {path:'accueil',component:AcceuilComponent},
  {path :"liste" , component:ListeComponent},
  {path: "updateEtudiant/:id", component: UpdateEtudiantComponent},
  {path:"**",component:ErreurComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

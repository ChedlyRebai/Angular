import { AccueilComponent } from './accueil/accueil.component';
import { ErreurComponent } from './erreur/erreur.component';
import { AppComponent } from './../../../tp3/src/app/app.component';
import { ListesComponent } from './listes/listes.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouteComponent } from './ajoute/ajoute.component';

const routes: Routes = [
  // {path:"" ,redirectTo:'/accueil',component:AccueilComponent,pathMatch:"full"},
  // {path :"ajoute",component:AjouteComponent},
  // {path:'accueil',component:AccueilComponent},
  // {path :"liste" , component:ListesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

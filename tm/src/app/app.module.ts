import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErreurComponent } from './erreur/erreur.component';
import { AjouteComponent } from './ajoute/ajoute.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListeComponent } from './liste/liste.component';
import { FormsModule } from '@angular/forms';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';


@NgModule({
  declarations: [
    AppComponent,
    ErreurComponent,
    AjouteComponent,
    AcceuilComponent,
    ListeComponent,
    UpdateEtudiantComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

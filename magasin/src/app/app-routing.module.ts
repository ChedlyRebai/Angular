import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
const routes: Routes = [
 {path: "articles", component : ArticlesComponent},
 {path: "add-article", component : AddArticleComponent},
 {path: "", redirectTo: "articles", pathMatch: "full"},
 {path: "updateArticle/:id", component: UpdateArticleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

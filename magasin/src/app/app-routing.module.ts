import { SearchArticleComponent } from './search-article/search-article.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
 {path: "articles", component : ArticlesComponent},
 {path: "add-article", component : AddArticleComponent},

 {path: "updateArticle/:id", component: UpdateArticleComponent},
 {path: "searchArticle", component: SearchArticleComponent},
 {path: "dashboard", component: DashboardComponent},
 {path: "", redirectTo: "dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

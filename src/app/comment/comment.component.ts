import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  tab : any[] = [] ;
  tab1:any[]=[];
  id=0;
  nouveau = {
  id : this.id,
  msg : '',
  };
  ajouterCommentaire() {
  this.tab.push({
  id : this.id,
  msg : this.nouveau.msg,

  }) ;
  this.nouveau = {
  id : this.id++ ,
  msg : '',

  };
  }

  delet(index: number){

   this.tab = this.tab.filter((elem) => elem.id != index);
     }
  constructor() { }
  ngOnInit(): void {
  }
  }

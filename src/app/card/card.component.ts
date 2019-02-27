import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private _artServ:ArticleService) { }

  public t1=[];


  ngOnInit() {
    return this._artServ.getNews().subscribe(file=> {
      this.t1=file;
      console.log(this.t1)
   });
  }

}

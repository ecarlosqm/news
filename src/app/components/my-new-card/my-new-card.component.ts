import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { MyNews } from 'src/app/context/my-news/domain/my_news';
import { MyNewsFirestoreService } from 'src/app/context/my-news/services/my-news-firestore.service';
import { MyNewsService } from 'src/app/context/my-news/domain/my-news.service';

@Component({
  selector: 'app-my-new-card',
  templateUrl: './my-new-card.component.html',
  styleUrls: ['./my-new-card.component.css']
})
export class MyNewCardComponent implements OnInit, OnChanges {

  @Input()myNews:MyNews;
  waitingDelete:boolean;
  

  constructor(private myNewsService:MyNewsService) { }

  ngOnInit(): void {
    this.assertNewsSourcesNotNull();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.assertNewsSourcesNotNull();
  }

  assertNewsSourcesNotNull(): void {
    if (this.myNews == null || this.myNews == undefined) {
      throw new Error("MyNews is required to build the card");
    }
  }

  async delete(){
    if(this.waitingDelete){
      return;
    }
    this.waitingDelete = true;
    await this.myNewsService.removeNews(this.myNews.id);
    this.waitingDelete = false;
  }

  get imageUrl(): string {
    return this.myNews.imageUrl ?? "https://designshack.net/wp-content/uploads/placeholder-image.png";
  }

  get title(): string {
    return this.myNews.title;
  }

  get urlSource(){
    return this.myNews.url;
  }

}

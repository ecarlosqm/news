import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NewsSource } from 'src/app/context/news_source/domain/news_source';
import { MyNewsService } from 'src/app/context/my-news/domain/my-news.service';
import { MyNews } from 'src/app/context/my-news/domain/my_news';
import { AuthService } from 'src/app/context/auth/domain/auth_service';

import { v1 as uuidv1 } from 'uuid';

@Component({
  selector: 'app-news-source-card',
  templateUrl: './news-source-card.component.html',
  styleUrls: ['./news-source-card.component.css']
})
export class NewsSourceCardComponent implements OnInit, OnChanges {

  @Input() private newsSource: NewsSource;
  saved: boolean = false;

  constructor(private myNewsService: MyNewsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.assertNewsSourcesNotNull();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.assertNewsSourcesNotNull();
  }

  assertNewsSourcesNotNull(): void {
    if (this.newsSource == null || this.newsSource == undefined) {
      throw new Error("newsSource are required to build the card");
    }
  }

  async addToMyNews() {
    await this.myNewsService.addNews(new MyNews(uuidv1(), await this.authService.userId(), this.urlSource, this.imageUrl, this.newsSource.title))
    this.saved = true;
  }

  get imageUrl(): string {
    return this.newsSource.imageUrl ?? "https://designshack.net/wp-content/uploads/placeholder-image.png";
  }

  get title(): string {
    return this.newsSource.title;
  }

  get date(): Date {
    return this.newsSource.publishedAt;
  }

  get author(): string {
    const author: string = this.newsSource.author;
    if (author == null || author == undefined || author == "" || author == 'anónimo') {
      return "Desconocido";
    }
    return author;
  }

  get urlSource() {
    return this.newsSource.url;
  }

}

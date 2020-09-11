import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NewsSource } from 'src/app/context/news_source/domain/news_source';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewsSourceInMemoryService } from 'src/app/context/news_source/services/news-source-in-memory.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
})
export class NewsPageComponent implements OnInit {

  closeMessage = false;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.fetch();
  }

  get newsSources(): Observable<NewsSource[]> {
    return this.newsService.newsSources;
  }

  fetchNext(event:any):void{
    this.newsService.fetchNext();
  }

  get showLocalDataMesage(){
     return false;
  }

  closeLocalDataMesage(){
    this.closeMessage = true;
  }

}

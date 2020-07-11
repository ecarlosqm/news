import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Observable } from 'rxjs/internal/Observable';
import { NewsSource } from 'src/app/context/news_source/domain/news_source';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
  }

  get newsSources(): Observable<NewsSource[]> {
    return this.newsService.newsSources;
  }

}

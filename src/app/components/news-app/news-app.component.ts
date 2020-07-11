import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-app',
  templateUrl: './news-app.component.html',
  styleUrls: ['./news-app.component.css']
})
export class NewsAppComponent {

  constructor(private newsService: NewsService) { }

}

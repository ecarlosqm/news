import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { NewsSource } from 'src/app/context/news_source/domain/news_source';
import { MyNewsService } from 'src/app/context/my-news/domain/my-news.service';
import { AuthService } from 'src/app/context/auth/domain/auth_service';
import { MyNews } from 'src/app/context/my-news/domain/my_news';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-news-page',
  templateUrl: './my-news-page.component.html',
  styleUrls: ['./my-news-page.component.css']
})
export class MyNewsPageComponent implements OnInit {

  myNewsArray:Observable<MyNews[]>;

  waitingDelete: boolean = false;

  constructor(private myNewsService:MyNewsService, private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.userId().then((userId)=>{
      this.myNewsArray = this.myNewsService.getMyNews(userId);
    })
  }

}

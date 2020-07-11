import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyNews } from './my_news';

@Injectable()
export abstract class MyNewsService {

  abstract getMyNews(userId:string):Observable<MyNews[]>;
  abstract addNews(news:MyNews):Promise<void>;
  abstract removeNews(id:string):Promise<void>;

}

import { Injectable } from '@angular/core';
import { NewsSourceService } from '../domain/news_service';
import { NewsSource } from '../domain/news_source';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

//Domain
import { NewsSourceSearchCriteria } from '../domain/news_soruce_search_criteria';

//RXJS
import { map } from 'rxjs/operators';


@Injectable()
export class NewsSourceNewsApiService implements NewsSourceService {


  private baseUrl: string = 'http://newsapi.org/v2/top-headlines';
  private apiKey: string = environment.newApiKey;
  
  constructor(private http: HttpClient) { }

  getNews(criteria: NewsSourceSearchCriteria): Promise<NewsSource[]> {

    return this.http.get<any>(this.baseUrl, {
      params: {
        "page": criteria.page?.toString(),
        "pageSize": criteria.pageSize?.toString(),
        'category': criteria.category,
        "country": criteria.countryCode,
        "apiKey": this.apiKey
      }
    }).pipe(map((json: any) => {
      const articlesJson: Array<any> = json["articles"];
      return articlesJson.map<NewsSource>((articleJson, index, artiarticleJsons) => {
        return NewsSource.fromPrimitives(articleJson)
      });
    }
    )).toPromise()
  }

}
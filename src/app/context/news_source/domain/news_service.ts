import { NewsSource } from "./news_source";
import { NewsSourceSearchCriteria } from './news_soruce_search_criteria';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class NewsSourceService {
    abstract getNews(criteria:NewsSourceSearchCriteria):Promise<NewsSource[]>;
}
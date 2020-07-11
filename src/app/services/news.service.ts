import { Injectable } from '@angular/core';
import { NewsSourceService } from '../context/news_source/domain/news_service';
import { NewsSource } from '../context/news_source/domain/news_source';
import { NewsSourceSearchCriteria } from '../context/news_source/domain/news_soruce_search_criteria';
import { Observable, Observer, BehaviorSubject } from 'rxjs';

interface DropdownOption { value: string, label: string }

// TODO Consider using the state pattern
@Injectable(
  { providedIn: 'root', }
)
export class NewsService {

  private _currentNewsSources: NewsSource[];
  private _newsSourcesSubject: BehaviorSubject<NewsSource[]> = new BehaviorSubject<NewsSource[]>(this._currentNewsSources);
  private _currentPage: number = 1;
  private _currentPageSize: number = 20;
  private _canFetchMore: boolean = true;

  get currentCountry() { return this._dropdownCountryOption?.value ?? 'mx' }
  get currentCategory() { return this._dropdownCategoryOption?.value ?? 'general' }

  private _dropdownCountryOption: DropdownOption = { value: "mx", label: "México" };
  private _dropdownCategoryOption: DropdownOption = { value: "general", label: "General" };

  constructor(private newsSource: NewsSourceService) {

  }

  get currentDropdownCountryOption() {
    return this._dropdownCountryOption;
  }

  get currentDropdownCategoryOption() {
    return this._dropdownCategoryOption;
  }

  changeDropdownCountry(countryOption: DropdownOption) {
    this.assertNeitherUndefinedNorNull(countryOption, 'The countryOption must be provided assert you send a not nullable option');
    this._dropdownCountryOption = countryOption;
    this._currentPage = 1;
    this._canFetchMore = true;
    this.fetch();
  }

  changeDropdownCategory(categoryOption: DropdownOption) {
    this.assertNeitherUndefinedNorNull(categoryOption, 'The categortOption must be provided assert you send a not nullable option');
    this._dropdownCategoryOption = categoryOption;
    this._currentPage = 1;
    this._canFetchMore = true;
    this.fetch();
  }

  async fetch(): Promise<void> {
    this._currentPage = 1;
    this._canFetchMore = true;
    const newNewsSources: NewsSource[] = await this.newsSource.getNews(new NewsSourceSearchCriteria(this.currentCountry, this.currentCategory, this._currentPage, this._currentPageSize));
    this._currentNewsSources = newNewsSources;
    this._newsSourcesSubject.next(this._currentNewsSources);
  }

  async fetchNext() {
    if (!this._canFetchMore) {
      return;
    }

    this._currentPage++;
    const newNewsSources: NewsSource[] = await this.newsSource.getNews(new NewsSourceSearchCriteria(this.currentCountry, this.currentCategory, this._currentPage, this._currentPageSize));

    if (newNewsSources.length == 0) {
      this._canFetchMore = false;
      return;
    }

    this._currentNewsSources = this._currentNewsSources.concat(...newNewsSources);
    this._newsSourcesSubject.next(this._currentNewsSources);
  }

  get newsSources(): Observable<NewsSource[]> {
    return this._newsSourcesSubject.asObservable();
  }

  get canFetchMore(): boolean {
    return this._canFetchMore;
  }

  assertNeitherUndefinedNorNull(value, error: string) {
    if (value == undefined || value == null) {
      throw new Error(error);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/context/core/domain/countries';
import { Categories } from 'src/app/context/core/domain/categories';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/context/core/domain/category';
import { Country } from 'src/app/context/core/domain/country';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

  countries: any[] = Countries.values.map((country)=> {return {value:country.code, label:country.name}});

  categories: any[] = Categories.values.map((category)=> {
    return {value:category.code, label:category.name}
  });

  public currentCountry:any;
  public currentCategory:any;

  constructor(private newsService: NewsService, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.currentCountry = this.newsService.currentDropdownCountryOption;
    this.currentCategory = this.newsService.currentDropdownCategoryOption;
  }

  onSelectCountry(value: any) {
    this.newsService.changeDropdownCountry(value);
  }

  onSelectCategory(value: any) {
    this.newsService.changeDropdownCategory(value);
  }
}

interface DropdownOption {
  value: string | number,
  label: string,
}
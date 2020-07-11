import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NewsSource } from 'src/app/context/news_source/domain/news_source';
import { assert } from 'console';
import { assertNotNull } from '@angular/compiler/src/output/output_ast';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-sources-grid',
  templateUrl: './news-sources-grid.component.html',
  styleUrls: ['./news-sources-grid.component.css']
})
export class NewsSourcesGridComponent implements OnChanges, OnInit {

  @Input() newsSources: NewsSource[];
  @Output() onGetDown: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('grid') grid: ElementRef;

  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
    this.assertNewsSourcesNotNull();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.assertNewsSourcesNotNull();
  }

  assertNewsSourcesNotNull(): void {
    if (this.newsSources == null || this.newsSources == undefined) {
      throw new Error("newsSources are required to build the grid");
    }
  }

  ngAfterViewInit(): void {
    this.grid.nativeElement.addEventListener('scroll', function (event) {
      var element = event.target;

      if (!this.hasScroll(element.clientHeight, element.scrollHeight)) {
        return;
      }

      if (this.didItGetDown(element.clientHeight, element.scrollHeight, element.scrollTop) && this.newsService.canFetchMore) {
        this.onGetDown?.emit();

      }

    }.bind(this));
  }

  hasScroll(divHeight: number, scrollHeight: number) {
    return divHeight != undefined && scrollHeight != undefined && divHeight != scrollHeight;
  }

  didItGetDown(divHeight: number, scrollHeight: number, scrollStartToBeVisibleAt: number) {
    const scrollPosition: number = scrollHeight - scrollStartToBeVisibleAt;

    return (divHeight > scrollPosition - .5 && divHeight < scrollPosition + .5);
  }

}

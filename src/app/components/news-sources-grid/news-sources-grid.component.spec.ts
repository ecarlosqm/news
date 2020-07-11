import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSourcesGridComponent } from './news-sources-grid.component';

describe('NewsSourcesGridComponent', () => {
  let component: NewsSourcesGridComponent;
  let fixture: ComponentFixture<NewsSourcesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSourcesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSourcesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

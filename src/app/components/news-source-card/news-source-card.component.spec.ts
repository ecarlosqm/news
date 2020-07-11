import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSourceCardComponent } from './news-source-card.component';

describe('NewsSourceCardComponent', () => {
  let component: NewsSourceCardComponent;
  let fixture: ComponentFixture<NewsSourceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSourceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSourceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

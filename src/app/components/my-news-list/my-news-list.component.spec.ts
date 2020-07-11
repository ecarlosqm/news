import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewsListComponent } from './my-news-list.component';

describe('MyNewsListComponent', () => {
  let component: MyNewsListComponent;
  let fixture: ComponentFixture<MyNewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

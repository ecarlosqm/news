import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewCardComponent } from './my-new-card.component';

describe('MyNewCardComponent', () => {
  let component: MyNewCardComponent;
  let fixture: ComponentFixture<MyNewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

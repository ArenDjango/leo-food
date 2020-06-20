import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglereviewsComponent } from './singlereviews.component';

describe('SinglereviewsComponent', () => {
  let component: SinglereviewsComponent;
  let fixture: ComponentFixture<SinglereviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglereviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglereviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

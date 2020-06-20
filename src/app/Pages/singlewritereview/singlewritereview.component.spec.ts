import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglewritereviewComponent } from './singlewritereview.component';

describe('SinglewritereviewComponent', () => {
  let component: SinglewritereviewComponent;
  let fixture: ComponentFixture<SinglewritereviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglewritereviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglewritereviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

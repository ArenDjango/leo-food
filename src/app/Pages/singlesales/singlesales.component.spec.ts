import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglesalesComponent } from './singlesales.component';

describe('SinglesalesComponent', () => {
  let component: SinglesalesComponent;
  let fixture: ComponentFixture<SinglesalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglesalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglesalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

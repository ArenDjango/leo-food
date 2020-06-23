import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglesaleComponent } from './singlesale.component';

describe('SinglesaleComponent', () => {
  let component: SinglesaleComponent;
  let fixture: ComponentFixture<SinglesaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglesaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllkitchenComponent } from './allkitchen.component';

describe('AllkitchenComponent', () => {
  let component: AllkitchenComponent;
  let fixture: ComponentFixture<AllkitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllkitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllkitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

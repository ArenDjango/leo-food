import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterphonenumberComponent } from './enterphonenumber.component';

describe('EnterphonenumberComponent', () => {
  let component: EnterphonenumberComponent;
  let fixture: ComponentFixture<EnterphonenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterphonenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterphonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

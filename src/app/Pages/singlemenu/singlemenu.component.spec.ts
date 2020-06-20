import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglemenuComponent } from './singlemenu.component';

describe('SinglemenuComponent', () => {
  let component: SinglemenuComponent;
  let fixture: ComponentFixture<SinglemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

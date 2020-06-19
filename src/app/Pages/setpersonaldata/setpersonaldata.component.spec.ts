import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetpersonaldataComponent } from './setpersonaldata.component';

describe('SetpersonaldataComponent', () => {
  let component: SetpersonaldataComponent;
  let fixture: ComponentFixture<SetpersonaldataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetpersonaldataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetpersonaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAlertInputComponent } from './child-alert-input.component';

describe('ChildAlertInputComponent', () => {
  let component: ChildAlertInputComponent;
  let fixture: ComponentFixture<ChildAlertInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildAlertInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAlertInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

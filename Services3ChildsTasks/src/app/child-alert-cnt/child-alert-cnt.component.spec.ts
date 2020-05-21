import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAlertCntComponent } from './child-alert-cnt.component';

describe('ChildAlertCntComponent', () => {
  let component: ChildAlertCntComponent;
  let fixture: ComponentFixture<ChildAlertCntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildAlertCntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAlertCntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientWaitingAreaWidgetComponent } from './patient-waiting-area-widget.component';

describe('PatientWaitingAreaWidgetComponent', () => {
  let component: PatientWaitingAreaWidgetComponent;
  let fixture: ComponentFixture<PatientWaitingAreaWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientWaitingAreaWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientWaitingAreaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

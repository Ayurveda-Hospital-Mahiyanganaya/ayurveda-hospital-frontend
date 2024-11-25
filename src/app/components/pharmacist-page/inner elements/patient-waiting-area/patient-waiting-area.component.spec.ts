import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientWaitingAreaComponent } from './patient-waiting-area.component';

describe('PatientWaitingAreaComponent', () => {
  let component: PatientWaitingAreaComponent;
  let fixture: ComponentFixture<PatientWaitingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientWaitingAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientWaitingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPatientDashboardComponent } from './doctor-patient-dashboard.component';

describe('DoctorPatientDashboardComponent', () => {
  let component: DoctorPatientDashboardComponent;
  let fixture: ComponentFixture<DoctorPatientDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorPatientDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorPatientDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

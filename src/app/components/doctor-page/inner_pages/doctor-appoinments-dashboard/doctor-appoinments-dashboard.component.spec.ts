import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppoinmentsDashboardComponent } from './doctor-appoinments-dashboard.component';

describe('DoctorAppoinmentsDashboardComponent', () => {
  let component: DoctorAppoinmentsDashboardComponent;
  let fixture: ComponentFixture<DoctorAppoinmentsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorAppoinmentsDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorAppoinmentsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

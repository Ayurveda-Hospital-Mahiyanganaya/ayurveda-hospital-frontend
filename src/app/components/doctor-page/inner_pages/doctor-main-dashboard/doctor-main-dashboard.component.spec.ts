import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorMainDashboardComponent } from './doctor-main-dashboard.component';

describe('DoctorMainDashboardComponent', () => {
  let component: DoctorMainDashboardComponent;
  let fixture: ComponentFixture<DoctorMainDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorMainDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorMainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

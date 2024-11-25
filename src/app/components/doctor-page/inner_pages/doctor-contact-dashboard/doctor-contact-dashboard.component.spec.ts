import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorContactDashboardComponent } from './doctor-contact-dashboard.component';

describe('DoctorContactDashboardComponent', () => {
  let component: DoctorContactDashboardComponent;
  let fixture: ComponentFixture<DoctorContactDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorContactDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorContactDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

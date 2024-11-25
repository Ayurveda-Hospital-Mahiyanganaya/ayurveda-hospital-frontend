import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorStatSectionComponent } from './doctor-stat-section.component';

describe('DoctorStatSectionComponent', () => {
  let component: DoctorStatSectionComponent;
  let fixture: ComponentFixture<DoctorStatSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorStatSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorStatSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

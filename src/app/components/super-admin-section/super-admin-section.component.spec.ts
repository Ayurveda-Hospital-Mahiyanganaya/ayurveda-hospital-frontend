import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminSectionComponent } from './super-admin-section.component';

describe('SuperAdminSectionComponent', () => {
  let component: SuperAdminSectionComponent;
  let fixture: ComponentFixture<SuperAdminSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperAdminSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperAdminSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

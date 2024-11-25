import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmissionPageComponent } from './addmission-page.component';

describe('AddmissionPageComponent', () => {
  let component: AddmissionPageComponent;
  let fixture: ComponentFixture<AddmissionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddmissionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddmissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

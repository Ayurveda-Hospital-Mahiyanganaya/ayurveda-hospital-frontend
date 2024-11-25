import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistNavBarComponent } from './pharmacist-nav-bar.component';

describe('PharmacistNavBarComponent', () => {
  let component: PharmacistNavBarComponent;
  let fixture: ComponentFixture<PharmacistNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacistNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PharmacistNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

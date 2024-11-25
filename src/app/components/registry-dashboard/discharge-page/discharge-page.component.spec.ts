import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargePageComponent } from './discharge-page.component';

describe('DischargePageComponent', () => {
  let component: DischargePageComponent;
  let fixture: ComponentFixture<DischargePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DischargePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DischargePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

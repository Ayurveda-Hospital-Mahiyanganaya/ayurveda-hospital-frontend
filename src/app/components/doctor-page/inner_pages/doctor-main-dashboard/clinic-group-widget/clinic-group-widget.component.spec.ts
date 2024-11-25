import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicGroupWidgetComponent } from './clinic-group-widget.component';

describe('ClinicGroupWidgetComponent', () => {
  let component: ClinicGroupWidgetComponent;
  let fixture: ComponentFixture<ClinicGroupWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicGroupWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClinicGroupWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

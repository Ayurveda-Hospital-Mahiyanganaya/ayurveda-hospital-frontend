import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentViewWidgetComponent } from './appoinment-view-widget.component';

describe('AppoinmentViewWidgetComponent', () => {
  let component: AppoinmentViewWidgetComponent;
  let fixture: ComponentFixture<AppoinmentViewWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppoinmentViewWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppoinmentViewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

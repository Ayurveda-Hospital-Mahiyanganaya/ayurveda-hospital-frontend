import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashWidgetComponent } from './main-dash-widget.component';

describe('MainDashWidgetComponent', () => {
  let component: MainDashWidgetComponent;
  let fixture: ComponentFixture<MainDashWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainDashWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainDashWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

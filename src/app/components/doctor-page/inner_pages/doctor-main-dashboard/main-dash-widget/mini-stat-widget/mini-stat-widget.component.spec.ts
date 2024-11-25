import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniStatWidgetComponent } from './mini-stat-widget.component';

describe('MiniStatWidgetComponent', () => {
  let component: MiniStatWidgetComponent;
  let fixture: ComponentFixture<MiniStatWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniStatWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiniStatWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

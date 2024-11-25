import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdPageComponent } from './opd-page.component';

describe('OpdPageComponent', () => {
  let component: OpdPageComponent;
  let fixture: ComponentFixture<OpdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpdPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

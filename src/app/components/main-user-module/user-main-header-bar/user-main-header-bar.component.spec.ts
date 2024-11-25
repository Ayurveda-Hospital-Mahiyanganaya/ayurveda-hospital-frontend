import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMainHeaderBarComponent } from './user-main-header-bar.component';

describe('UserMainHeaderBarComponent', () => {
  let component: UserMainHeaderBarComponent;
  let fixture: ComponentFixture<UserMainHeaderBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMainHeaderBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserMainHeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodAnimationComponent } from './blood-animation.component';

describe('BloodAnimationComponent', () => {
  let component: BloodAnimationComponent;
  let fixture: ComponentFixture<BloodAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloodAnimationComponent]
    });
    fixture = TestBed.createComponent(BloodAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInSectionComponent } from './sign-in-section.component';

describe('SignInSectionComponent', () => {
  let component: SignInSectionComponent;
  let fixture: ComponentFixture<SignInSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInSectionComponent]
    });
    fixture = TestBed.createComponent(SignInSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

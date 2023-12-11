import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionSectionComponent } from './competition-section.component';

describe('CompetitionSectionComponent', () => {
  let component: CompetitionSectionComponent;
  let fixture: ComponentFixture<CompetitionSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitionSectionComponent]
    });
    fixture = TestBed.createComponent(CompetitionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

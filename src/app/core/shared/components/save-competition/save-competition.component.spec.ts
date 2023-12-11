import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCompetitionComponent } from './save-competition.component';

describe('SaveCompetitionComponent', () => {
  let component: SaveCompetitionComponent;
  let fixture: ComponentFixture<SaveCompetitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveCompetitionComponent]
    });
    fixture = TestBed.createComponent(SaveCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

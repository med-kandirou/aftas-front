import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParticipantComponent } from './list-participant.component';

describe('ListParticipantComponent', () => {
  let component: ListParticipantComponent;
  let fixture: ComponentFixture<ListParticipantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListParticipantComponent]
    });
    fixture = TestBed.createComponent(ListParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

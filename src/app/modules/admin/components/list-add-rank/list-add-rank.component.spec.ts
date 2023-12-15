import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddRankComponent } from './list-add-rank.component';

describe('ListAddRankComponent', () => {
  let component: ListAddRankComponent;
  let fixture: ComponentFixture<ListAddRankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAddRankComponent]
    });
    fixture = TestBed.createComponent(ListAddRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

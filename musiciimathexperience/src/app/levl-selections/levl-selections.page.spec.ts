import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevlSelectionsPage } from './levl-selections.page';

describe('LevlSelectionsPage', () => {
  let component: LevlSelectionsPage;
  let fixture: ComponentFixture<LevlSelectionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LevlSelectionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeAddComponent } from './outcome-add.component';

describe('OutcomeAddComponent', () => {
  let component: OutcomeAddComponent;
  let fixture: ComponentFixture<OutcomeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutcomeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

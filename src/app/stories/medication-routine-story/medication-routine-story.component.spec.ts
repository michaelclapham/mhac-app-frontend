import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationRoutineStoryComponent } from './medication-routine-story.component';

describe('MedicationRoutineStoryComponent', () => {
  let component: MedicationRoutineStoryComponent;
  let fixture: ComponentFixture<MedicationRoutineStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationRoutineStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationRoutineStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibiSaraStoryComponent } from './bibi-sara-story.component';

describe('BibiSaraStoryComponent', () => {
  let component: BibiSaraStoryComponent;
  let fixture: ComponentFixture<BibiSaraStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibiSaraStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibiSaraStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

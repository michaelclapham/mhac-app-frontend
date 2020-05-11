import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadAndBullyStoryComponent } from './bread-and-bully-story.component';

describe('BreadAndBullyStoryComponent', () => {
  let component: BreadAndBullyStoryComponent;
  let fixture: ComponentFixture<BreadAndBullyStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadAndBullyStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadAndBullyStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

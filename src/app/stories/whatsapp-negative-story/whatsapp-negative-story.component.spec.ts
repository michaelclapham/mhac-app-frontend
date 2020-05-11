import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappNegativeStoryComponent } from './whatsapp-negative-story.component';

describe('WhatsappNegativeStoryComponent', () => {
  let component: WhatsappNegativeStoryComponent;
  let fixture: ComponentFixture<WhatsappNegativeStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappNegativeStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappNegativeStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

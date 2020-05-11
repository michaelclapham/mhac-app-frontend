import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuttingOutFireComponent } from './putting-out-fire.component';

describe('PuttingOutFireComponent', () => {
  let component: PuttingOutFireComponent;
  let fixture: ComponentFixture<PuttingOutFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuttingOutFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuttingOutFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

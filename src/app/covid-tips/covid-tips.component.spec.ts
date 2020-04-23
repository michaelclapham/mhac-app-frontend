import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidTipsComponent } from './covid-tips.component';

describe('CovidTipsComponent', () => {
  let component: CovidTipsComponent;
  let fixture: ComponentFixture<CovidTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

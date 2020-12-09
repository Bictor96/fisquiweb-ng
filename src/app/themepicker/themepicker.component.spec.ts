import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemepickerComponent } from './themepicker.component';

describe('ThemepickerComponent', () => {
  let component: ThemepickerComponent;
  let fixture: ComponentFixture<ThemepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

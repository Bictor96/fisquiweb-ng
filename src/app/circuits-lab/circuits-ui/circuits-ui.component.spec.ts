import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitsUiComponent } from './circuits-ui.component';

describe('CircuitsUiComponent', () => {
  let component: CircuitsUiComponent;
  let fixture: ComponentFixture<CircuitsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitsUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

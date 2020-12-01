import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitsLabComponent } from './circuits-lab.component';

describe('CircuitsLabComponent', () => {
  let component: CircuitsLabComponent;
  let fixture: ComponentFixture<CircuitsLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitsLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitsLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

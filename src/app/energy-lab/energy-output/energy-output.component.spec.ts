import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyOutputComponent } from './energy-output.component';

describe('EnergyOutputComponent', () => {
  let component: EnergyOutputComponent;
  let fixture: ComponentFixture<EnergyOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

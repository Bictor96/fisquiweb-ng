import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyLabComponent } from './energy-lab.component';

describe('EnergyLabComponent', () => {
  let component: EnergyLabComponent;
  let fixture: ComponentFixture<EnergyLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinematicLabComponent } from './kinematic-lab.component';

describe('KinematicLabComponent', () => {
  let component: KinematicLabComponent;
  let fixture: ComponentFixture<KinematicLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinematicLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinematicLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinematicOutputComponent } from './kinematic-output.component';

describe('KinematicOutputComponent', () => {
  let component: KinematicOutputComponent;
  let fixture: ComponentFixture<KinematicOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinematicOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinematicOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

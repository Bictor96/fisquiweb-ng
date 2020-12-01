import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinematicFormComponent } from './kinematic-form.component';

describe('KinematicFormComponent', () => {
  let component: KinematicFormComponent;
  let fixture: ComponentFixture<KinematicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinematicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinematicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

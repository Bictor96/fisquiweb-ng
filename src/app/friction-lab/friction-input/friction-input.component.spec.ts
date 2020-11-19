import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrictionInputComponent } from './friction-input.component';

describe('FrictionInputComponent', () => {
  let component: FrictionInputComponent;
  let fixture: ComponentFixture<FrictionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrictionInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrictionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

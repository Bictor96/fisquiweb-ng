import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrictionLabComponent } from './friction-lab.component';

describe('FrictionLabComponent', () => {
  let component: FrictionLabComponent;
  let fixture: ComponentFixture<FrictionLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrictionLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrictionLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrictionUiComponent } from './friction-ui.component';

describe('FrictionUiComponent', () => {
  let component: FrictionUiComponent;
  let fixture: ComponentFixture<FrictionUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrictionUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrictionUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

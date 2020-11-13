import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicOutputComponent } from './dynamic-output.component';

describe('DynamicOutputComponent', () => {
  let component: DynamicOutputComponent;
  let fixture: ComponentFixture<DynamicOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

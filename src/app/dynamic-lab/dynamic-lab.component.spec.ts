import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLabComponent } from './dynamic-lab.component';

describe('DynamicLabComponent', () => {
  let component: DynamicLabComponent;
  let fixture: ComponentFixture<DynamicLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

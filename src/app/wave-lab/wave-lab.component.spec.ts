import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveLabComponent } from './wave-lab.component';

describe('WaveLabComponent', () => {
  let component: WaveLabComponent;
  let fixture: ComponentFixture<WaveLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

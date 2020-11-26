import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveToolsComponent } from './wave-tools.component';

describe('WaveToolsComponent', () => {
  let component: WaveToolsComponent;
  let fixture: ComponentFixture<WaveToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

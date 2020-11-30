import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefractionUiComponent } from './refraction-ui.component';

describe('RefractionUiComponent', () => {
  let component: RefractionUiComponent;
  let fixture: ComponentFixture<RefractionUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefractionUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefractionUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefractionLabComponent } from './refraction-lab.component';

describe('RefractionLabComponent', () => {
  let component: RefractionLabComponent;
  let fixture: ComponentFixture<RefractionLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefractionLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefractionLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

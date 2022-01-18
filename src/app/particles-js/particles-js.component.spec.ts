import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticlesJsComponent } from './particles-js.component';

describe('ParticlesJsComponent', () => {
  let component: ParticlesJsComponent;
  let fixture: ComponentFixture<ParticlesJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticlesJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticlesJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

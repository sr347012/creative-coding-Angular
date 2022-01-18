import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebulaJsComponent } from './nebula-js.component';

describe('NebulaJsComponent', () => {
  let component: NebulaJsComponent;
  let fixture: ComponentFixture<NebulaJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebulaJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebulaJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

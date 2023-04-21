import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedometersComponent } from './speedometers.component';

describe('SpeedometersComponent', () => {
  let component: SpeedometersComponent;
  let fixture: ComponentFixture<SpeedometersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedometersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeedometersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

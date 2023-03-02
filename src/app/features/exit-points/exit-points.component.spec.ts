import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitPointsComponent } from './exit-points.component';

describe('ExitPointsComponent', () => {
  let component: ExitPointsComponent;
  let fixture: ComponentFixture<ExitPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitPointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

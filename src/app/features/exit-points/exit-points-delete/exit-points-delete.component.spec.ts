import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitPointsDeleteComponent } from './exit-points-delete.component';

describe('ExitPointsDeleteComponent', () => {
  let component: ExitPointsDeleteComponent;
  let fixture: ComponentFixture<ExitPointsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitPointsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitPointsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

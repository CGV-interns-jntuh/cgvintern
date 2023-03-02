import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitPointsUpdateComponent } from './exit-points-update.component';

describe('ExitPointsUpdateComponent', () => {
  let component: ExitPointsUpdateComponent;
  let fixture: ComponentFixture<ExitPointsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitPointsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitPointsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

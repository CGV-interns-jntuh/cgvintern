import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitPointsCreateComponent } from './exit-points-create.component';

describe('ExitPointsCreateComponent', () => {
  let component: ExitPointsCreateComponent;
  let fixture: ComponentFixture<ExitPointsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitPointsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitPointsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

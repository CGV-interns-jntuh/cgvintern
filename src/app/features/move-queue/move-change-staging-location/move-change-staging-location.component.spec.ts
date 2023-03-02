import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveChangeStagingLocationComponent } from './move-change-staging-location.component';

describe('MoveChangeStagingLocationComponent', () => {
  let component: MoveChangeStagingLocationComponent;
  let fixture: ComponentFixture<MoveChangeStagingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveChangeStagingLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveChangeStagingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusBuildingsComponent } from './campus-buildings.component';

describe('CampusBuildingsComponent', () => {
  let component: CampusBuildingsComponent;
  let fixture: ComponentFixture<CampusBuildingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusBuildingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

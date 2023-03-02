import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampusBuildingComponent } from './add-campus-building.component';

describe('AddCampusBuildingComponent', () => {
  let component: AddCampusBuildingComponent;
  let fixture: ComponentFixture<AddCampusBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCampusBuildingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCampusBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

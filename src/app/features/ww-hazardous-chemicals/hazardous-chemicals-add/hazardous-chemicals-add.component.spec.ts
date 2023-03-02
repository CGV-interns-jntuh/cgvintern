import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardousChemicalsAddComponent } from './hazardous-chemicals-add.component';

describe('HazardousChemicalsAddComponent', () => {
  let component: HazardousChemicalsAddComponent;
  let fixture: ComponentFixture<HazardousChemicalsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HazardousChemicalsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HazardousChemicalsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwHazardousChemicalsComponent } from './ww-hazardous-chemicals.component';

describe('WwHazardousChemicalsComponent', () => {
  let component: WwHazardousChemicalsComponent;
  let fixture: ComponentFixture<WwHazardousChemicalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwHazardousChemicalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwHazardousChemicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

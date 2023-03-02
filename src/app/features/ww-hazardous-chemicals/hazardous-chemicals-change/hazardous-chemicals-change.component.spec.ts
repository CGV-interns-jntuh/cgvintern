import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardousChemicalsChangeComponent } from './hazardous-chemicals-change.component';

describe('HazardousChemicalsChangeComponent', () => {
  let component: HazardousChemicalsChangeComponent;
  let fixture: ComponentFixture<HazardousChemicalsChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HazardousChemicalsChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HazardousChemicalsChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

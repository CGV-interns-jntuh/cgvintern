import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingContactComponent } from './building-contact.component';

describe('BuildingContactComponent', () => {
  let component: BuildingContactComponent;
  let fixture: ComponentFixture<BuildingContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

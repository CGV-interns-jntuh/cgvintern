import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLocationUpdateComponent } from './map-location-update.component';

describe('MapLocationUpdateComponent', () => {
  let component: MapLocationUpdateComponent;
  let fixture: ComponentFixture<MapLocationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapLocationUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapLocationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLocationDeleteComponent } from './map-location-delete.component';

describe('MapLocationDeleteComponent', () => {
  let component: MapLocationDeleteComponent;
  let fixture: ComponentFixture<MapLocationDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapLocationDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapLocationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLocationCreateComponent } from './map-location-create.component';

describe('MapLocationCreateComponent', () => {
  let component: MapLocationCreateComponent;
  let fixture: ComponentFixture<MapLocationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapLocationCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapLocationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCrossReferenceComponent } from './map-cross-reference.component';

describe('MapCrossReferenceComponent', () => {
  let component: MapCrossReferenceComponent;
  let fixture: ComponentFixture<MapCrossReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapCrossReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapCrossReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

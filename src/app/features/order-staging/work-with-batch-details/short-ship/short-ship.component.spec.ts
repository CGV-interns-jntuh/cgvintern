import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortShipComponent } from './short-ship.component';

describe('ShortShipComponent', () => {
  let component: ShortShipComponent;
  let fixture: ComponentFixture<ShortShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortShipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

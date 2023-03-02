import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipConfirmComponent } from './ship-confirm.component';

describe('ShipConfirmComponent', () => {
  let component: ShipConfirmComponent;
  let fixture: ComponentFixture<ShipConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

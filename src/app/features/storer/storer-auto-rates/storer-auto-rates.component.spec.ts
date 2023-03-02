import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerAutoRatesComponent } from './storer-auto-rates.component';

describe('StorerAutoRatesComponent', () => {
  let component: StorerAutoRatesComponent;
  let fixture: ComponentFixture<StorerAutoRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerAutoRatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerAutoRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

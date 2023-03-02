import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerChangeRatesComponent } from './storer-change-rates.component';

describe('StorerChangeRatesComponent', () => {
  let component: StorerChangeRatesComponent;
  let fixture: ComponentFixture<StorerChangeRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerChangeRatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerChangeRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

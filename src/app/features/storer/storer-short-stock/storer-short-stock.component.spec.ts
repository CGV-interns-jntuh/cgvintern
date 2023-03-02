import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerShortStockComponent } from './storer-short-stock.component';

describe('StorerShortStockComponent', () => {
  let component: StorerShortStockComponent;
  let fixture: ComponentFixture<StorerShortStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerShortStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerShortStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

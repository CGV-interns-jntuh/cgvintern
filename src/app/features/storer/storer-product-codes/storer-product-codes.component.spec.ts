import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerProductCodesComponent } from './storer-product-codes.component';

describe('StorerProductCodesComponent', () => {
  let component: StorerProductCodesComponent;
  let fixture: ComponentFixture<StorerProductCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerProductCodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerProductCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

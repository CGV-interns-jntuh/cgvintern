import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerPrintersComponent } from './storer-printers.component';

describe('StorerPrintersComponent', () => {
  let component: StorerPrintersComponent;
  let fixture: ComponentFixture<StorerPrintersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerPrintersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerPrintersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

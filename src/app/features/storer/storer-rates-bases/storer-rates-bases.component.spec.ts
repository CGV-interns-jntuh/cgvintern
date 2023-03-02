import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerRatesBasesComponent } from './storer-rates-bases.component';

describe('StorerRatesBasesComponent', () => {
  let component: StorerRatesBasesComponent;
  let fixture: ComponentFixture<StorerRatesBasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerRatesBasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerRatesBasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

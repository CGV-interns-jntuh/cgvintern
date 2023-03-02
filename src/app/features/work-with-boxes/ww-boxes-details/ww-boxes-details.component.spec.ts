import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwBoxesDetailsComponent } from './ww-boxes-details.component';

describe('WwBoxesDetailsComponent', () => {
  let component: WwBoxesDetailsComponent;
  let fixture: ComponentFixture<WwBoxesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwBoxesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwBoxesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

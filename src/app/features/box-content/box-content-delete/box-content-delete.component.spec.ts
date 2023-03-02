import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContentDeleteComponent } from './box-content-delete.component';

describe('BoxContentDeleteComponent', () => {
  let component: BoxContentDeleteComponent;
  let fixture: ComponentFixture<BoxContentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContentDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxContentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

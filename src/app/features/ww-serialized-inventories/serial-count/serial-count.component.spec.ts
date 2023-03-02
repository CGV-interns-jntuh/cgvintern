import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialCountComponent } from './serial-count.component';

describe('SerialCountComponent', () => {
  let component: SerialCountComponent;
  let fixture: ComponentFixture<SerialCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerialCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

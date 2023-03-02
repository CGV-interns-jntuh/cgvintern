import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerializedDetailsComponent } from './serialized-details.component';

describe('SerializedDetailsComponent', () => {
  let component: SerializedDetailsComponent;
  let fixture: ComponentFixture<SerializedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerializedDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerializedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

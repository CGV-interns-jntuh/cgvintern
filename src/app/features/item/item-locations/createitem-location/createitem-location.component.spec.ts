import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateitemLocationComponent } from './createitem-location.component';

describe('CreateitemLocationComponent', () => {
  let component: CreateitemLocationComponent;
  let fixture: ComponentFixture<CreateitemLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateitemLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateitemLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

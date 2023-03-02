import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarriersComponent } from './update-carriers.component';

describe('UpdateCarriersComponent', () => {
  let component: UpdateCarriersComponent;
  let fixture: ComponentFixture<UpdateCarriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCarriersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCarriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

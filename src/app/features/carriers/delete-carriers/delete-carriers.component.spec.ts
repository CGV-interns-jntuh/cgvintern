import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCarriersComponent } from './delete-carriers.component';

describe('DeleteCarriersComponent', () => {
  let component: DeleteCarriersComponent;
  let fixture: ComponentFixture<DeleteCarriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCarriersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCarriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOrderStagingComponent } from './delete-order-staging.component';

describe('DeleteOrderStagingComponent', () => {
  let component: DeleteOrderStagingComponent;
  let fixture: ComponentFixture<DeleteOrderStagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteOrderStagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteOrderStagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

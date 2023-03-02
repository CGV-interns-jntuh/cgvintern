import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigneeUpdateComponent } from './consignee-update.component';

describe('ConsigneeUpdateComponent', () => {
  let component: ConsigneeUpdateComponent;
  let fixture: ComponentFixture<ConsigneeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsigneeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsigneeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

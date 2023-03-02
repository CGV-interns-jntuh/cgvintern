import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigneeCreateComponent } from './consignee-create.component';

describe('ConsigneeCreateComponent', () => {
  let component: ConsigneeCreateComponent;
  let fixture: ComponentFixture<ConsigneeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsigneeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsigneeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigneeXrefComponent } from './consignee-xref.component';

describe('ConsigneeXrefComponent', () => {
  let component: ConsigneeXrefComponent;
  let fixture: ComponentFixture<ConsigneeXrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsigneeXrefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsigneeXrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

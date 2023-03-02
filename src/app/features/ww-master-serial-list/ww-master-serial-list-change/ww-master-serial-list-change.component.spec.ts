import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwMasterSerialListChangeComponent } from './ww-master-serial-list-change.component';

describe('WwMasterSerialListChangeComponent', () => {
  let component: WwMasterSerialListChangeComponent;
  let fixture: ComponentFixture<WwMasterSerialListChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwMasterSerialListChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwMasterSerialListChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

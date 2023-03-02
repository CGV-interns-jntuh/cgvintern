import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwMasterSerialListAddComponent } from './ww-master-serial-list-add.component';

describe('WwMasterSerialListAddComponent', () => {
  let component: WwMasterSerialListAddComponent;
  let fixture: ComponentFixture<WwMasterSerialListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwMasterSerialListAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwMasterSerialListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

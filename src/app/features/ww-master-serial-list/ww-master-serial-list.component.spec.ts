import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwMasterSerialListComponent } from './ww-master-serial-list.component';

describe('WwMasterSerialListComponent', () => {
  let component: WwMasterSerialListComponent;
  let fixture: ComponentFixture<WwMasterSerialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwMasterSerialListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwMasterSerialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

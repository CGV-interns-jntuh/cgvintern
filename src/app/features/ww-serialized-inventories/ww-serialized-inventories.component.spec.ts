import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwSerializedInventoriesComponent } from './ww-serialized-inventories.component';

describe('WwSerializedInventoriesComponent', () => {
  let component: WwSerializedInventoriesComponent;
  let fixture: ComponentFixture<WwSerializedInventoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwSerializedInventoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwSerializedInventoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwBoxesUpdateStsDeleteComponent } from './ww-boxes-update-sts-delete.component';

describe('WwBoxesUpdateStsDeleteComponent', () => {
  let component: WwBoxesUpdateStsDeleteComponent;
  let fixture: ComponentFixture<WwBoxesUpdateStsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwBoxesUpdateStsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwBoxesUpdateStsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerUccLblCtlComponent } from './storer-ucc-lbl-ctl.component';

describe('StorerUccLblCtlComponent', () => {
  let component: StorerUccLblCtlComponent;
  let fixture: ComponentFixture<StorerUccLblCtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerUccLblCtlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerUccLblCtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

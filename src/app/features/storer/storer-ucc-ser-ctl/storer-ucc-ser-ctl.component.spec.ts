import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerUccSerCtlComponent } from './storer-ucc-ser-ctl.component';

describe('StorerUccSerCtlComponent', () => {
  let component: StorerUccSerCtlComponent;
  let fixture: ComponentFixture<StorerUccSerCtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerUccSerCtlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerUccSerCtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

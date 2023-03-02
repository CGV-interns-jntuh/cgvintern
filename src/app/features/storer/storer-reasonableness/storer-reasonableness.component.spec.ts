import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerReasonablenessComponent } from './storer-reasonableness.component';

describe('StorerReasonablenessComponent', () => {
  let component: StorerReasonablenessComponent;
  let fixture: ComponentFixture<StorerReasonablenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerReasonablenessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerReasonablenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

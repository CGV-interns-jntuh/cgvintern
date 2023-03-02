import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerAccountStatusComponent } from './storer-account-status.component';

describe('StorerAccountStatusComponent', () => {
  let component: StorerAccountStatusComponent;
  let fixture: ComponentFixture<StorerAccountStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerAccountStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerAccountStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountProcessingComponent } from './account-processing.component';

describe('AccountProcessingComponent', () => {
  let component: AccountProcessingComponent;
  let fixture: ComponentFixture<AccountProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountProcessingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccountProcessingComponent } from './delete-account-processing.component';

describe('DeleteAccountProcessingComponent', () => {
  let component: DeleteAccountProcessingComponent;
  let fixture: ComponentFixture<DeleteAccountProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAccountProcessingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAccountProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

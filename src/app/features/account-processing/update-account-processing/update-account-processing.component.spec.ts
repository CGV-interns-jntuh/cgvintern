import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccountProcessingComponent } from './update-account-processing.component';

describe('UpdateAccountProcessingComponent', () => {
  let component: UpdateAccountProcessingComponent;
  let fixture: ComponentFixture<UpdateAccountProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccountProcessingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAccountProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

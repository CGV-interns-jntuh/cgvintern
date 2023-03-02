import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountProcessingComponent } from './create-account-processing.component';

describe('CreateAccountProcessingComponent', () => {
  let component: CreateAccountProcessingComponent;
  let fixture: ComponentFixture<CreateAccountProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountProcessingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

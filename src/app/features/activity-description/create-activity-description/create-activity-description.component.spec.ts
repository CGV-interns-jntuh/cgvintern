import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActivityDescriptionComponent } from './create-activity-description.component';

describe('CreateActivityDescriptionComponent', () => {
  let component: CreateActivityDescriptionComponent;
  let fixture: ComponentFixture<CreateActivityDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateActivityDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateActivityDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

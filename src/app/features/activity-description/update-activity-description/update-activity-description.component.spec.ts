import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivityDescriptionComponent } from './update-activity-description.component';

describe('UpdateActivityDescriptionComponent', () => {
  let component: UpdateActivityDescriptionComponent;
  let fixture: ComponentFixture<UpdateActivityDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateActivityDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateActivityDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

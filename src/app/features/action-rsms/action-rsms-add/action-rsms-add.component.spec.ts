import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionRsmsAddComponent } from './action-rsms-add.component';

describe('ActionRsmsAddComponent', () => {
  let component: ActionRsmsAddComponent;
  let fixture: ComponentFixture<ActionRsmsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionRsmsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionRsmsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

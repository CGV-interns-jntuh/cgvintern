import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionRsmsComponent } from './action-rsms.component';

describe('ActionRsmsComponent', () => {
  let component: ActionRsmsComponent;
  let fixture: ComponentFixture<ActionRsmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionRsmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionRsmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

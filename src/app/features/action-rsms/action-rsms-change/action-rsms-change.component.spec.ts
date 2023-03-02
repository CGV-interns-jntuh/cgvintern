import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionRsmsChangeComponent } from './action-rsms-change.component';

describe('ActionRsmsChangeComponent', () => {
  let component: ActionRsmsChangeComponent;
  let fixture: ComponentFixture<ActionRsmsChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionRsmsChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionRsmsChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

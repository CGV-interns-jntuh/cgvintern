import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerGen869TriggerComponent } from './storer-gen869-trigger.component';

describe('StorerGen869TriggerComponent', () => {
  let component: StorerGen869TriggerComponent;
  let fixture: ComponentFixture<StorerGen869TriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerGen869TriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerGen869TriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

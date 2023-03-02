import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerExpNoActivityComponent } from './storer-exp-no-activity.component';

describe('StorerExpNoActivityComponent', () => {
  let component: StorerExpNoActivityComponent;
  let fixture: ComponentFixture<StorerExpNoActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerExpNoActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerExpNoActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

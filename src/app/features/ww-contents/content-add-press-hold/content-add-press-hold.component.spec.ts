import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAddPressHoldComponent } from './content-add-press-hold.component';

describe('ContentAddPressHoldComponent', () => {
  let component: ContentAddPressHoldComponent;
  let fixture: ComponentFixture<ContentAddPressHoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentAddPressHoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentAddPressHoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

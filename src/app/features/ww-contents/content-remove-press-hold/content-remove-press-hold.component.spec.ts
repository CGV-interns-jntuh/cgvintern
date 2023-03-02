import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRemovePressHoldComponent } from './content-remove-press-hold.component';

describe('ContentRemovePressHoldComponent', () => {
  let component: ContentRemovePressHoldComponent;
  let fixture: ComponentFixture<ContentRemovePressHoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentRemovePressHoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentRemovePressHoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

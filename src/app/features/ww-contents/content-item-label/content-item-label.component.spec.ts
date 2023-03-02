import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentItemLabelComponent } from './content-item-label.component';

describe('ContentItemLabelComponent', () => {
  let component: ContentItemLabelComponent;
  let fixture: ComponentFixture<ContentItemLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentItemLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentItemLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

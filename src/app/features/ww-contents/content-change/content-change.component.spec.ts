import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChangeComponent } from './content-change.component';

describe('ContentChangeComponent', () => {
  let component: ContentChangeComponent;
  let fixture: ComponentFixture<ContentChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

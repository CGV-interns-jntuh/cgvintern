import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalAbbreviationsChangeComponent } from './postal-abbreviations-change.component';

describe('PostalAbbreviationsChangeComponent', () => {
  let component: PostalAbbreviationsChangeComponent;
  let fixture: ComponentFixture<PostalAbbreviationsChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostalAbbreviationsChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostalAbbreviationsChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

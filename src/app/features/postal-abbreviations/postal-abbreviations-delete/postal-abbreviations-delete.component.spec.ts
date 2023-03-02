import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalAbbreviationsDeleteComponent } from './postal-abbreviations-delete.component';

describe('PostalAbbreviationsDeleteComponent', () => {
  let component: PostalAbbreviationsDeleteComponent;
  let fixture: ComponentFixture<PostalAbbreviationsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostalAbbreviationsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostalAbbreviationsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

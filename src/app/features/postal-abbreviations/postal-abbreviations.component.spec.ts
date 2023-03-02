import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalAbbreviationsComponent } from './postal-abbreviations.component';

describe('PostalAbbreviationsComponent', () => {
  let component: PostalAbbreviationsComponent;
  let fixture: ComponentFixture<PostalAbbreviationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostalAbbreviationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostalAbbreviationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

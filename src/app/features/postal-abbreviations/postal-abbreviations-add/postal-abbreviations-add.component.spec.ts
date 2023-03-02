import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalAbbreviationsAddComponent } from './postal-abbreviations-add.component';

describe('PostalAbbreviationsAddComponent', () => {
  let component: PostalAbbreviationsAddComponent;
  let fixture: ComponentFixture<PostalAbbreviationsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostalAbbreviationsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostalAbbreviationsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

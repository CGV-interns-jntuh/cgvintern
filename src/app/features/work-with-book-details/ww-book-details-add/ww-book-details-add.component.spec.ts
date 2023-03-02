import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwBookDetailsAddComponent } from './ww-book-details-add.component';

describe('WwBookDetailsAddComponent', () => {
  let component: WwBookDetailsAddComponent;
  let fixture: ComponentFixture<WwBookDetailsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwBookDetailsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwBookDetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

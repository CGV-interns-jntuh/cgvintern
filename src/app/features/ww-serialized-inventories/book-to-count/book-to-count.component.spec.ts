import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookToCountComponent } from './book-to-count.component';

describe('BookToCountComponent', () => {
  let component: BookToCountComponent;
  let fixture: ComponentFixture<BookToCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookToCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookToCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

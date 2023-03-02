import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerializedBookSynopsysComponent } from './serialized-book-synopsys.component';

describe('SerializedBookSynopsysComponent', () => {
  let component: SerializedBookSynopsysComponent;
  let fixture: ComponentFixture<SerializedBookSynopsysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerializedBookSynopsysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerializedBookSynopsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

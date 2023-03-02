import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContentChangeComponent } from './box-content-change.component';

describe('BoxContentChangeComponent', () => {
  let component: BoxContentChangeComponent;
  let fixture: ComponentFixture<BoxContentChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContentChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxContentChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

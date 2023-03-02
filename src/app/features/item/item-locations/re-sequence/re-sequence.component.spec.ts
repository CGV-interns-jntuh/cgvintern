import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReSequenceComponent } from './re-sequence.component';

describe('ReSequenceComponent', () => {
  let component: ReSequenceComponent;
  let fixture: ComponentFixture<ReSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReSequenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

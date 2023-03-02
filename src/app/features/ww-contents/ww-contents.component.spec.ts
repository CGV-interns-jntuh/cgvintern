import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwContentsComponent } from './ww-contents.component';

describe('WwContentsComponent', () => {
  let component: WwContentsComponent;
  let fixture: ComponentFixture<WwContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwBoxesChangeComponent } from './ww-boxes-change.component';

describe('WwBoxesChangeComponent', () => {
  let component: WwBoxesChangeComponent;
  let fixture: ComponentFixture<WwBoxesChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwBoxesChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwBoxesChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwBoxesAddComponent } from './ww-boxes-add.component';

describe('WwBoxesAddComponent', () => {
  let component: WwBoxesAddComponent;
  let fixture: ComponentFixture<WwBoxesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwBoxesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwBoxesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

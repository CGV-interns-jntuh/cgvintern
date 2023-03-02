import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwBoxesDeleteComponent } from './ww-boxes-delete.component';

describe('WwBoxesDeleteComponent', () => {
  let component: WwBoxesDeleteComponent;
  let fixture: ComponentFixture<WwBoxesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwBoxesDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwBoxesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

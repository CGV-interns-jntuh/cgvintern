import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContentDeactiveComponent } from './box-content-deactive.component';

describe('BoxContentDeactiveComponent', () => {
  let component: BoxContentDeactiveComponent;
  let fixture: ComponentFixture<BoxContentDeactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContentDeactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxContentDeactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

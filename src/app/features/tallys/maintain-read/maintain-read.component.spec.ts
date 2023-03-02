import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainReadComponent } from './maintain-read.component';

describe('MaintainReadComponent', () => {
  let component: MaintainReadComponent;
  let fixture: ComponentFixture<MaintainReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintainReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintainReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

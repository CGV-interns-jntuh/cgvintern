import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationChangeComponent } from './application-change.component';

describe('ApplicationChangeComponent', () => {
  let component: ApplicationChangeComponent;
  let fixture: ComponentFixture<ApplicationChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

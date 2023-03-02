import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerContactCreateComponent } from './storer-contact-create.component';

describe('StorerContactCreateComponent', () => {
  let component: StorerContactCreateComponent;
  let fixture: ComponentFixture<StorerContactCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerContactCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerContactCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerContactUpdateComponent } from './storer-contact-update.component';

describe('StorerContactUpdateComponent', () => {
  let component: StorerContactUpdateComponent;
  let fixture: ComponentFixture<StorerContactUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerContactUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerContactUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

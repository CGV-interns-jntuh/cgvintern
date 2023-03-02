import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerAccountAttributesComponent } from './storer-account-attributes.component';

describe('StorerAccountAttributesComponent', () => {
  let component: StorerAccountAttributesComponent;
  let fixture: ComponentFixture<StorerAccountAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerAccountAttributesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerAccountAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

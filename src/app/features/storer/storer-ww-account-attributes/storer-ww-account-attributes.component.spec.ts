import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerWwAccountAttributesComponent } from './storer-ww-account-attributes.component';

describe('StorerWwAccountAttributesComponent', () => {
  let component: StorerWwAccountAttributesComponent;
  let fixture: ComponentFixture<StorerWwAccountAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerWwAccountAttributesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerWwAccountAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

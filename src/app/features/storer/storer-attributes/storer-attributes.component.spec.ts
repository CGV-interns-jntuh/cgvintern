import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerAttributesComponent } from './storer-attributes.component';

describe('StorerAttributesComponent', () => {
  let component: StorerAttributesComponent;
  let fixture: ComponentFixture<StorerAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerAttributesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

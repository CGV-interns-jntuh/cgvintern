import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerPutawaySchemeComponent } from './storer-putaway-scheme.component';

describe('StorerPutawaySchemeComponent', () => {
  let component: StorerPutawaySchemeComponent;
  let fixture: ComponentFixture<StorerPutawaySchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerPutawaySchemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerPutawaySchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

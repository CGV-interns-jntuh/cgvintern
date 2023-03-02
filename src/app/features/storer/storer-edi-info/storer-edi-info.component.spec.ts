import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerEdiInfoComponent } from './storer-edi-info.component';

describe('StorerEdiInfoComponent', () => {
  let component: StorerEdiInfoComponent;
  let fixture: ComponentFixture<StorerEdiInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerEdiInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerEdiInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

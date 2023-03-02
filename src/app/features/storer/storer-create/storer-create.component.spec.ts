import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerCreateComponent } from './storer-create.component';

describe('StorerCreateComponent', () => {
  let component: StorerCreateComponent;
  let fixture: ComponentFixture<StorerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

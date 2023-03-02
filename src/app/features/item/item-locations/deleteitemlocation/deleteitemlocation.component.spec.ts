import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteitemlocationComponent } from './deleteitemlocation.component';

describe('DeleteitemlocationComponent', () => {
  let component: DeleteitemlocationComponent;
  let fixture: ComponentFixture<DeleteitemlocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteitemlocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteitemlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

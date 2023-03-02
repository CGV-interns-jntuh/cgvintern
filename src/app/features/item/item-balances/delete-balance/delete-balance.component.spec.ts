import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBalanceComponent } from './delete-balance.component';

describe('DeleteBalanceComponent', () => {
  let component: DeleteBalanceComponent;
  let fixture: ComponentFixture<DeleteBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

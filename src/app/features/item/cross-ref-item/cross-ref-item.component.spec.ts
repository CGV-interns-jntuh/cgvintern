import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossRefItemComponent } from './cross-ref-item.component';

describe('CrossRefItemComponent', () => {
  let component: CrossRefItemComponent;
  let fixture: ComponentFixture<CrossRefItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossRefItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrossRefItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

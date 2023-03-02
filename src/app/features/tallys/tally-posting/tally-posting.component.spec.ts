import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyPostingComponent } from './tally-posting.component';

describe('TallyPostingComponent', () => {
  let component: TallyPostingComponent;
  let fixture: ComponentFixture<TallyPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallyPostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

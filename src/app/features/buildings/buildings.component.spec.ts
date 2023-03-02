import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsWorkWithComponent } from './buildings.component';

describe('BuildingsComponent', () => {
  let component: BuildingsWorkWithComponent;
  let fixture: ComponentFixture<BuildingsWorkWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingsWorkWithComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingsWorkWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

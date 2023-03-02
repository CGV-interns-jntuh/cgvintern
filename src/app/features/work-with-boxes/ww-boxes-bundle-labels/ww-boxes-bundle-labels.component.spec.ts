import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwBoxesBundleLabelsComponent } from './ww-boxes-bundle-labels.component';

describe('WwBoxesBundleLabelsComponent', () => {
  let component: WwBoxesBundleLabelsComponent;
  let fixture: ComponentFixture<WwBoxesBundleLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwBoxesBundleLabelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwBoxesBundleLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwBoxesBundleManifestComponent } from './ww-boxes-bundle-manifest.component';

describe('WwBoxesBundleManifestComponent', () => {
  let component: WwBoxesBundleManifestComponent;
  let fixture: ComponentFixture<WwBoxesBundleManifestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwBoxesBundleManifestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwBoxesBundleManifestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

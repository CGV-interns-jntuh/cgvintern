import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationAuthoritiesComponent } from './application-authorities.component';

describe('ApplicationAuthoritiesComponent', () => {
  let component: ApplicationAuthoritiesComponent;
  let fixture: ComponentFixture<ApplicationAuthoritiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationAuthoritiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationAuthoritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

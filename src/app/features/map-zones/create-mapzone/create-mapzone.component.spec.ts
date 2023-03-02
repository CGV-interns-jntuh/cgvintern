import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMapzoneComponent } from './create-mapzone.component';

describe('CreateMapzoneComponent', () => {
  let component: CreateMapzoneComponent;
  let fixture: ComponentFixture<CreateMapzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMapzoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMapzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMapzoneComponent } from './update-mapzone.component';

describe('UpdateMapzoneComponent', () => {
  let component: UpdateMapzoneComponent;
  let fixture: ComponentFixture<UpdateMapzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMapzoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMapzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

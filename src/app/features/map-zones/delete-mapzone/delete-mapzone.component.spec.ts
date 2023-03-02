import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMapzoneComponent } from './delete-mapzone.component';

describe('DeleteMapzoneComponent', () => {
  let component: DeleteMapzoneComponent;
  let fixture: ComponentFixture<DeleteMapzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMapzoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMapzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

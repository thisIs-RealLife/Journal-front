import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteSubjectComponent } from './dialog-delete-subject.component';

describe('DialogDeleteSubjectComponent', () => {
  let component: DialogDeleteSubjectComponent;
  let fixture: ComponentFixture<DialogDeleteSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

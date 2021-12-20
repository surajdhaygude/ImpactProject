import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnurseComponent } from './editnurse.component';

describe('EditnurseComponent', () => {
  let component: EditnurseComponent;
  let fixture: ComponentFixture<EditnurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnurseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

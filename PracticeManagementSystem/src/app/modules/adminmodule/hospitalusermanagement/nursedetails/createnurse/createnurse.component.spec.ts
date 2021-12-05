import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenurseComponent } from './createnurse.component';

describe('CreatenurseComponent', () => {
  let component: CreatenurseComponent;
  let fixture: ComponentFixture<CreatenurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenurseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

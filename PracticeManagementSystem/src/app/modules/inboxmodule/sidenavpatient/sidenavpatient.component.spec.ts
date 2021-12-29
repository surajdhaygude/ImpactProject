import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavpatientComponent } from './sidenavpatient.component';

describe('SidenavpatientComponent', () => {
  let component: SidenavpatientComponent;
  let fixture: ComponentFixture<SidenavpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

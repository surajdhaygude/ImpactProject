import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavuserComponent } from './sidenavuser.component';

describe('SidenavuserComponent', () => {
  let component: SidenavuserComponent;
  let fixture: ComponentFixture<SidenavuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavuserComponent } from './topnavuser.component';

describe('TopnavuserComponent', () => {
  let component: TopnavuserComponent;
  let fixture: ComponentFixture<TopnavuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopnavuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxuserComponent } from './inboxuser.component';

describe('InboxuserComponent', () => {
  let component: InboxuserComponent;
  let fixture: ComponentFixture<InboxuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

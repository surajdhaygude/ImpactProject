import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxpatientComponent } from './inboxpatient.component';

describe('InboxpatientComponent', () => {
  let component: InboxpatientComponent;
  let fixture: ComponentFixture<InboxpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

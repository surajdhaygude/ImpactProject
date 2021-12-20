import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendnoteComponent } from './sendnote.component';

describe('SendnoteComponent', () => {
  let component: SendnoteComponent;
  let fixture: ComponentFixture<SendnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendnoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

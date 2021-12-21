import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavpatientComponent } from './topnavpatient.component';

describe('TopnavpatientComponent', () => {
  let component: TopnavpatientComponent;
  let fixture: ComponentFixture<TopnavpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopnavpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

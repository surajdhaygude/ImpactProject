import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosismasterComponent } from './diagnosismaster.component';

describe('DiagnosismasterComponent', () => {
  let component: DiagnosismasterComponent;
  let fixture: ComponentFixture<DiagnosismasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosismasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosismasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

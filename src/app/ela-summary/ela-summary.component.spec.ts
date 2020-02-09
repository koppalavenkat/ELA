import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElaSummaryComponent } from './ela-summary.component';

describe('ElaSummaryComponent', () => {
  let component: ElaSummaryComponent;
  let fixture: ComponentFixture<ElaSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElaSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElaSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

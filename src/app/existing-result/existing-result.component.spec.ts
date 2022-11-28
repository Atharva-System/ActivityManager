import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingResultComponent } from './existing-result.component';

describe('ExistingResultComponent', () => {
  let component: ExistingResultComponent;
  let fixture: ComponentFixture<ExistingResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

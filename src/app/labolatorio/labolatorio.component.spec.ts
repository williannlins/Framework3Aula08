import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabolatorioComponent } from './labolatorio.component';

describe('LabolatorioComponent', () => {
  let component: LabolatorioComponent;
  let fixture: ComponentFixture<LabolatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabolatorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabolatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

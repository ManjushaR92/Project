import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPDComponent } from './bpd.component';

describe('BPDComponent', () => {
  let component: BPDComponent;
  let fixture: ComponentFixture<BPDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BPDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BPDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

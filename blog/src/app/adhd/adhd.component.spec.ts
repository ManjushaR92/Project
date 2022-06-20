import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADHDComponent } from './adhd.component';

describe('ADHDComponent', () => {
  let component: ADHDComponent;
  let fixture: ComponentFixture<ADHDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADHDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ADHDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCDComponent } from './ocd.component';

describe('OCDComponent', () => {
  let component: OCDComponent;
  let fixture: ComponentFixture<OCDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OCDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

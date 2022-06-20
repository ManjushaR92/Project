import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAppointComponent } from './book-appoint.component';

describe('BookAppointComponent', () => {
  let component: BookAppointComponent;
  let fixture: ComponentFixture<BookAppointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAppointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

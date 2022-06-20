import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-appoint',
  templateUrl: './book-appoint.component.html',
  styleUrls: ['./book-appoint.component.css']
})
export class BookAppointComponent implements OnInit {

  constructor( public router :Router) { }

  ngOnInit(): void {
  }
BookApp(){
  alert('Our Executive will Contact you. Appointment Done');
    this.router.navigate(['/bloglist'])
}
}

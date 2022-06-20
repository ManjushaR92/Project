import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-needhelp',
  templateUrl: './needhelp.component.html',
  styleUrls: ['./needhelp.component.css']
})
export class NeedhelpComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
anxiety(){
  this.router.navigateByUrl('/anxiety');
}
adhd(){
  this.router.navigateByUrl('/adhd');
}
bipolar(){
  this.router.navigateByUrl('/bipolar');
}

ocd(){
  this.router.navigateByUrl('/ocd');
}
bpd(){
  this.router.navigateByUrl('/bpd');
}

}

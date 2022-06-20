import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user={uname:'',password:''}

  constructor(public _auth:AuthService,public router:Router, public fb:FormBuilder) { }

  ngOnInit(): void {
 
}
    loginUser(): void {
      
    
      this._auth.loginUser(this.user).subscribe((res)=>{
       
        localStorage.setItem('token', res.token);
        this.router.navigate(['/bloglist'])
        console.log('data enter');
      })
        
      
    

}}

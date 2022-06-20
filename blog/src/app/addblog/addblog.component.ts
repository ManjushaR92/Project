import { Component, OnInit } from '@angular/core';
import { BloglistService } from '../bloglist.service';
import { BlogModel } from '../bloglist/blog.model';
import { Router,CanActivate } from '@angular/router';



@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

blogItem = new BlogModel(null,null,null);

  constructor(public bloglistService: BloglistService , public router : Router) { }


  ngOnInit(): void {}

  NewBlog(){
    console.log("Added");
    this.bloglistService.addBlogs(this.blogItem);
    alert('New Data Added');
    this.router.navigate(['/bloglist'])
  }
}

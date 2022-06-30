import { Component, OnInit } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { BloglistService } from '../bloglist.service';
import { BlogModel } from '../bloglist/blog.model';
@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  blogItem = new BlogModel(null,null,null);

  constructor(public bloglistService:BloglistService,public router:Router) { }

  ngOnInit(): void {
    let blogId = localStorage.getItem("editBlogId");
    this.bloglistService.getBlog(blogId).subscribe((data)=>{
      this.blogItem=JSON.parse(JSON.stringify(data));
    })
   
  }
editBlog()
{
this.bloglistService.editBlogId(this.blogItem);
alert("success");
this.router.navigate(['/update:id']);
}
}

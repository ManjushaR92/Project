import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../bloglist/blog.model';
import { BloglistService } from '../bloglist.service';
import { Router , CanActivate} from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})


export class BloglistComponent {

  blogs: BlogModel[];

  constructor( public bloglistService:BloglistService,public router :Router,public _auth:AuthService) { }

  ngOnInit() : void{
    this.bloglistService.getBlogList().subscribe((data)=>{
     this.blogs =JSON.parse(JSON.stringify(data));
    })
  }
   editBlog(blog:any)
   {
      localStorage.setItem("editBlogId",blog._id.toString());
      this.router.navigate(['update/:id'])
   } 
   deleteBlog(blog:any)
   {
     this.bloglistService.deleteBlog(blog._id)
     .subscribe((data)=>{
      this.blogs = this.blogs.filter(p => p !== blog);
     })
   }
}

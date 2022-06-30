import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BloglistService {
  item= {
    title:'',
    author:'',
    body:''}

  constructor( public http: HttpClient) { }

getBlog(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
getBlogList(){
  return this.http.get('http://localhost:3000/bloglist')
}

addBlogs(item:any){
  console.log("Accessed");
  return this.http.post('http://localhost:3000/insert', {item})
  .subscribe(data=>{console.log(data)});
}
deleteBlog(id:any)
{

  return this.http.delete("http://localhost:3000/remove/"+id)

}
editBlogId(blog:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update/:id",blog)
    .subscribe(data =>{console.log(data)})
  }
}

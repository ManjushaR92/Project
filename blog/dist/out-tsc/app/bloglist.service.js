import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let BloglistService = class BloglistService {
    constructor(http) {
        this.http = http;
        this.item = {
            title: '',
            author: '',
            body: ''
        };
    }
    getBlog(id) {
        return this.http.get("http://localhost:3000/" + id);
    }
    getBlogList() {
        return this.http.get('http://localhost:3000/bloglist');
    }
    addBlogs(item) {
        console.log("Accessed");
        return this.http.post('http://localhost:3000/insert', { item })
            .subscribe(data => { console.log(data); });
    }
    deleteBlog(id) {
        return this.http.delete("http://localhost:3000/remove/" + id);
    }
    editBlog(blog) {
        console.log('client update');
        return this.http.put("http://localhost:3000/update/:id", blog)
            .subscribe(data => { console.log(data); });
    }
};
BloglistService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BloglistService);
export { BloglistService };
//# sourceMappingURL=bloglist.service.js.map
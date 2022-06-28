import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BloglistComponent = class BloglistComponent {
    constructor(bloglistService, router, _auth) {
        this.bloglistService = bloglistService;
        this.router = router;
        this._auth = _auth;
    }
    ngOnInit() {
        this.bloglistService.getBlogList().subscribe((data) => {
            this.blogs = JSON.parse(JSON.stringify(data));
        });
    }
    editBlog(blog) {
        localStorage.setItem("editBlogId", blog._id.toString());
        this.router.navigate(['update/:id']);
    }
    deleteBlog(blog) {
        this.bloglistService.deleteBlog(blog._id)
            .subscribe((data) => {
            this.blogs = this.blogs.filter(p => p !== blog);
        });
    }
};
BloglistComponent = __decorate([
    Component({
        selector: 'app-bloglist',
        templateUrl: './bloglist.component.html',
        styleUrls: ['./bloglist.component.css']
    })
], BloglistComponent);
export { BloglistComponent };
//# sourceMappingURL=bloglist.component.js.map
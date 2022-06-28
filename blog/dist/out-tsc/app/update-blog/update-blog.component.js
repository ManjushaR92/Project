import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { BlogModel } from '../bloglist/blog.model';
let UpdateBlogComponent = class UpdateBlogComponent {
    constructor(bloglistService, router) {
        this.bloglistService = bloglistService;
        this.router = router;
        this.blogItem = new BlogModel(null, null, null);
    }
    ngOnInit() {
        let blogId = localStorage.getItem("editBlogId");
        this.bloglistService.getBlog(blogId).subscribe((data) => {
            this.blogItem = JSON.parse(JSON.stringify(data));
        });
    }
    editBlog() {
        this.bloglistService.editBlog(this.blogItem);
        alert("success");
        this.router.navigate(['/update:id']);
    }
};
UpdateBlogComponent = __decorate([
    Component({
        selector: 'app-update-blog',
        templateUrl: './update-blog.component.html',
        styleUrls: ['./update-blog.component.css']
    })
], UpdateBlogComponent);
export { UpdateBlogComponent };
//# sourceMappingURL=update-blog.component.js.map
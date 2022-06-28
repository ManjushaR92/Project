import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { BlogModel } from '../bloglist/blog.model';
let AddblogComponent = class AddblogComponent {
    constructor(bloglistService, router) {
        this.bloglistService = bloglistService;
        this.router = router;
        this.blogItem = new BlogModel(null, null, null);
    }
    ngOnInit() { }
    NewBlog() {
        console.log("Added");
        this.bloglistService.addBlogs(this.blogItem);
        alert('New Data Added');
        this.router.navigate(['/bloglist']);
    }
};
AddblogComponent = __decorate([
    Component({
        selector: 'app-addblog',
        templateUrl: './addblog.component.html',
        styleUrls: ['./addblog.component.css']
    })
], AddblogComponent);
export { AddblogComponent };
//# sourceMappingURL=addblog.component.js.map
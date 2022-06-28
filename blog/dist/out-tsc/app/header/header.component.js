import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(_auth, router) {
        this._auth = _auth;
        this.router = router;
    }
    ngOnInit() { }
    logoutUser() {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    }
    loggedUser() {
        this.router.navigate(['/bloglist']);
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map
import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(_auth, router, fb) {
        this._auth = _auth;
        this.router = router;
        this.fb = fb;
        this.user = { uname: '', password: '' };
    }
    ngOnInit() {
    }
    loginUser() {
        this._auth.loginUser(this.user).subscribe((res) => {
            localStorage.setItem('token', res.token);
            this.router.navigate(['/bloglist']);
            console.log('data enter');
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map
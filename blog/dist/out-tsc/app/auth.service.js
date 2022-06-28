import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this._loginUrl = "http://localhost:3000/login";
    }
    loginUser(user) {
        return this.http.post(this._loginUrl, user);
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }
};
AuthService = __decorate([
    Injectable()
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map
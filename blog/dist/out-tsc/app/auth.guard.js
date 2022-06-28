import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    constructor(_auth, router) {
        this._auth = _auth;
        this.router = router;
    }
    canActivate() {
        if (this._auth.loggedIn()) {
            console.log('true');
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map
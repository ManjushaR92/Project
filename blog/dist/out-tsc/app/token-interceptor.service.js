import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
let TokenInterceptorService = class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, nxt) {
        let authService = this.injector.get(AuthService);
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${authService.getToken()}`
            }
        });
        return nxt.handle(tokenizedReq);
    }
};
TokenInterceptorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TokenInterceptorService);
export { TokenInterceptorService };
//# sourceMappingURL=token-interceptor.service.js.map
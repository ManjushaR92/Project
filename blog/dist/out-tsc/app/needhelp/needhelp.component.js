import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NeedhelpComponent = class NeedhelpComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    anxiety() {
        this.router.navigateByUrl('/anxiety');
    }
    adhd() {
        this.router.navigateByUrl('/adhd');
    }
    bipolar() {
        this.router.navigateByUrl('/bipolar');
    }
    ocd() {
        this.router.navigateByUrl('/ocd');
    }
    bpd() {
        this.router.navigateByUrl('/bpd');
    }
};
NeedhelpComponent = __decorate([
    Component({
        selector: 'app-needhelp',
        templateUrl: './needhelp.component.html',
        styleUrls: ['./needhelp.component.css']
    })
], NeedhelpComponent);
export { NeedhelpComponent };
//# sourceMappingURL=needhelp.component.js.map
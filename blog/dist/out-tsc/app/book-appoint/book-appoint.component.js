import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BookAppointComponent = class BookAppointComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    BookApp() {
        alert('Our Executive will Contact you. Appointment Done');
        this.router.navigate(['/bloglist']);
    }
};
BookAppointComponent = __decorate([
    Component({
        selector: 'app-book-appoint',
        templateUrl: './book-appoint.component.html',
        styleUrls: ['./book-appoint.component.css']
    })
], BookAppointComponent);
export { BookAppointComponent };
//# sourceMappingURL=book-appoint.component.js.map
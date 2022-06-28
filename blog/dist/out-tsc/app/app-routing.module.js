import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddblogComponent } from './addblog/addblog.component';
import { AnxietyComponent } from './anxiety/anxiety.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BookAppointComponent } from './book-appoint/book-appoint.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NeedhelpComponent } from './needhelp/needhelp.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { AuthGuard } from './auth.guard';
import { BipolarComponent } from './bipolar/bipolar.component';
import { OCDComponent } from './ocd/ocd.component';
import { BPDComponent } from './bpd/bpd.component';
import { ADHDComponent } from './adhd/adhd.component';
const routes = [
    { path: '',
        component: MainpageComponent },
    { path: 'aboutus',
        component: AboutusComponent },
    { path: 'needhelp',
        component: NeedhelpComponent },
    { path: 'anxiety',
        component: AnxietyComponent },
    { path: 'login',
        component: LoginComponent },
    { path: 'bloglist',
        component: BloglistComponent },
    { path: 'addblog',
        canActivate: [AuthGuard],
        component: AddblogComponent },
    { path: 'book',
        component: BookAppointComponent },
    { path: 'update/:id',
        component: UpdateBlogComponent },
    { path: 'bipolar',
        component: BipolarComponent },
    { path: 'ocd',
        component: OCDComponent },
    { path: 'bpd',
        component: BPDComponent },
    { path: 'adhd',
        component: ADHDComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
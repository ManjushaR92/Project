import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';
import { NeedhelpComponent } from './needhelp/needhelp.component';

import { AnxietyComponent } from './anxiety/anxiety.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HammerModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { AddblogComponent } from './addblog/addblog.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { BookAppointComponent } from './book-appoint/book-appoint.component';
import { BloglistService } from './bloglist.service';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { ADHDComponent } from './adhd/adhd.component';
import { BipolarComponent } from './bipolar/bipolar.component';
import { OCDComponent } from './ocd/ocd.component';

import { BPDComponent } from './bpd/bpd.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    FooterComponent,
    AboutusComponent,
    HeaderComponent,
    NeedhelpComponent,
    
    AnxietyComponent,
    LoginComponent,
    BloglistComponent,
    AddblogComponent,
    UpdateBlogComponent,
    BookAppointComponent,
    ADHDComponent,
    BipolarComponent,
    OCDComponent,
    
    BPDComponent,
  ],
  
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HammerModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [BloglistService,AuthService,AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatBadgeModule} from "@angular/material/badge";
import {HeaderComponent} from "./layouts/header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HomeComponent} from "./home/home.component";
import {AuthInterceptor} from "./service/auth/auth.interceptor";
import {NgxSpinnerModule} from "ngx-spinner";
import {MyFirebaseModule} from "./service/upload/my-firebase.module";
import {NgxNavbarModule} from "ngx-bootstrap-navbar";
import {Error404Component} from "./error.404/error.404.component";
import { DefaultComponent } from './home/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    Error404Component,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    HttpClientModule,
    MatToolbarModule,
    NgxSpinnerModule,
    MyFirebaseModule,
    NgxNavbarModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

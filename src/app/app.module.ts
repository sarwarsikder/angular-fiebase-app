import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';


import {AppComponent} from './app.component';

import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {firebaseConfig} from './enviorment';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {PhoneAuthComponent} from './phone-auth/phone-auth.component';
import {AuthService} from './shared/services/auth.service';
import {ReactiveFormsModule} from '@angular/forms';
import {AfterAuthComponent} from "./components/common/after-auth/after-auth.component";
import {AfterAuthHeaderComponent} from "./components/common/after-auth-header/after-auth-header.component";
import {AfterAuthFooterComponent} from "./components/common/after-auth-footer/after-auth-footer.component";
import {AfterAuthManuComponent} from "./components/common/after-auth-manu/after-auth-manu.component";
import {BeforeAuthComponent} from "./components/common/before-auth/before-auth.component";
import {BeforeAuthHeaderComponent} from "./components/common/before-auth-header/before-auth-header.component";
import {BeforeAuthFooterComponent} from "./components/common/before-auth-footer/before-auth-footer.component";
import {ToastrModule} from "ngx-toastr";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    PhoneAuthComponent,
    AfterAuthComponent,
    AfterAuthHeaderComponent,
    AfterAuthFooterComponent,
    AfterAuthManuComponent,
    BeforeAuthComponent,
    BeforeAuthHeaderComponent,
    BeforeAuthFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig.firebase)),
    provideAuth(() => getAuth()),
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

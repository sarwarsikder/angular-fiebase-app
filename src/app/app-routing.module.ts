import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SecureInnerPageGuard } from './shared/guard/secure-inner-page.guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SignInComponent, canActivate: [SecureInnerPageGuard]},
  { path: 'register', component: SignUpComponent , canActivate: [SecureInnerPageGuard]},
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]},
  // { path: 'forgot-password', component: ForgotPasswordComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




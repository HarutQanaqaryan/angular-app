import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ClaimsComponent } from './components/claims/claims.component';
import { NotFoundComponent } from './components';
import { AuthGuardService, RedirectService } from './services';
import { LayoutComponent } from './components/layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'claims', pathMatch: 'full' },
      {
        title: 'Login',
        path: 'login',
        component: LoginComponent,
        canActivate: [RedirectService],
      },
      {
        title: 'Register',
        path: 'register',
        component: RegisterComponent,
        canActivate: [RedirectService],
      },
      {
        title: 'Claims',
        path: 'claims',
        component: ClaimsComponent,
        canActivate: [AuthGuardService],
      },
      {
        title: 'Not Found',
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

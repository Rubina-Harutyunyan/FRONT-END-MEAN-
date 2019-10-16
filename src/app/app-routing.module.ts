import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {RoleGuard} from "./servicies/role.guard";
import {AuthGuard} from "./servicies/auth.guard";
import {LoginGuard} from "./servicies/login.guard";


const routes: Routes = [
  {path: 'login', canActivate: [LoginGuard], component: SignInComponent},
  {path: 'signup',  component: SignUpComponent},
  {path: 'admin', canActivate: [AuthGuard, RoleGuard], loadChildren:  './admin/admin.module#AdminModule'},
  {path: 'userProfile', canActivate: [AuthGuard], loadChildren:  './user-profile/user.module#UserModule'},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

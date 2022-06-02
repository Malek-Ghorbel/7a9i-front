import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspaceAvocatComponent } from './espace-avocat/espace-avocat.component';
import { HomeComponent } from './home/home.component';
import { LawyerCasesComponent } from './lawyer-cases/lawyer-cases.component';
import { LoginLawyerComponent } from './login-lawyer/login-lawyer.component';
import { LoginComponent } from './login/login.component';
import { ProblemComponent } from './problem/problem.component';
import { ProfileClientComponent } from './profile/profile-client/profile-client.component';
import { ProfileLawyerComponent } from './profile/profile-lawyer/profile-lawyer.component';
import { SignupClientComponent } from './signup-client/signup-client.component';
import { SignupLawyerComponent } from './signup-lawyer/signup-lawyer.component';
import { SignupComponent } from './signup/signup.component';
import { Scroll1Component } from './scroll1/scroll1.component';
import { Scroll2Component } from './scroll2/scroll2.component';
import { Scroll3Component } from './scroll3/scroll3.component';
import { Scroll4Component } from './scroll4/scroll4.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'loginLawyer', component: LoginLawyerComponent},
  {path : 'signin', component: SigninComponent},
  {path:'signupLawyer', component:SignupLawyerComponent},
  {path:'signup', component:SignupComponent},
  {path:'signupClient', component:SignupClientComponent},
  {path:'problem', component:ProblemComponent},
  {path : 'profileLawyer', component: ProfileLawyerComponent},
  {path : 'profileClient', component: ProfileClientComponent},
  {path : 'lawyerCases', component: LawyerCasesComponent},
  {path : 'lawyerSpace', component: EspaceAvocatComponent},
  {path: 'scroll1', component: Scroll1Component},
  {path: 'scroll2', component: Scroll2Component},
  {path: 'scroll3', component: Scroll3Component},
  {path: 'scroll4', component: Scroll4Component},
  {path : '**' , component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

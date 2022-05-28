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

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'loginLawyer', component: LoginLawyerComponent},
  {path:'signupLawyer', component:SignupLawyerComponent},
  {path:'signupClient', component:SignupClientComponent},
  {path:'problem', component:ProblemComponent},
  {path : 'profileLawyer', component: ProfileLawyerComponent},
  {path : 'profileClient', component: ProfileClientComponent},
  {path : 'lawyerCases', component: LawyerCasesComponent},
  {path : 'lawyerSpace', component: EspaceAvocatComponent},
  {path : '**' , component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProblemComponent } from './problem/problem.component';
import { SignupClientComponent } from './signup-client/signup-client.component';
import { SignupLawyerComponent } from './signup-lawyer/signup-lawyer.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'signupLawyer', component:SignupLawyerComponent},
  {path:'signupClient', component:SignupClientComponent},
  {path:'problem', component:ProblemComponent},
  {path : '**' , component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

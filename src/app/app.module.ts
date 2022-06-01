import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupLawyerComponent } from './signup-lawyer/signup-lawyer.component';
import { SignupClientComponent } from './signup-client/signup-client.component';

import { ButtonsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProblemComponent } from './problem/problem.component';
import { ProfileLawyerComponent } from './profile/profile-lawyer/profile-lawyer.component';
import { ProfileClientComponent } from './profile/profile-client/profile-client.component';
import { LawyerCasesComponent } from './lawyer-cases/lawyer-cases.component';
import { LawyerCasesListComponent } from './lawyer-cases/lawyer-cases-list/lawyer-cases-list.component';
import { LawyerCaseComponent } from './lawyer-cases/lawyer-cases-list/lawyer-case/lawyer-case.component';
import { ModifModalComponent } from './lawyer-cases/lawyer-cases-list/lawyer-case/modif-modal/modif-modal.component';
import { TodoComponent } from './lawyer-cases/lawyer-cases-list/lawyer-case/modif-modal/todo/todo.component';
import { LawyerTableComponent } from './lawyer-table/lawyer-table.component';
import { LoginLawyerComponent } from './login-lawyer/login-lawyer.component';
import { EspaceAvocatComponent } from './espace-avocat/espace-avocat.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SignupComponent } from './signup/signup.component';
import { RatingModalComponent } from './rating-modal/rating-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SignupLawyerComponent,
    SignupClientComponent,
    ProblemComponent,
    ProfileLawyerComponent,
    ProfileClientComponent,
    LawyerCasesComponent,
    LawyerCasesListComponent,
    LawyerCaseComponent,
    ModifModalComponent,
    TodoComponent,
    LawyerTableComponent,
    LoginLawyerComponent,
    EspaceAvocatComponent,
    SignupComponent,
    RatingModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    ButtonsModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

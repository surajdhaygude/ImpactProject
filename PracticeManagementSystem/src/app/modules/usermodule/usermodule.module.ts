import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { PatientregistrationComponent } from './userregistration/patientregistration/patientregistration.component';
import { AdminregistrationComponent } from './userregistration/adminregistration/adminregistration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LoginComponent,
    ChangepasswordComponent,
    UserregistrationComponent,
    PatientregistrationComponent,
    AdminregistrationComponent,

    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    UserregistrationComponent

  ]
  
})
export class UsermoduleModule { }

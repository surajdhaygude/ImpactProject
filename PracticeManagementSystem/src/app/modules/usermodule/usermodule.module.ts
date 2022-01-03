import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { PatientregistrationComponent } from './userregistration/patientregistration/patientregistration.component';
import { AdminregistrationComponent } from './userregistration/adminregistration/adminregistration.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PatientdashbordComponent } from './patientdashbord/patientdashbord.component';
import { HospitalusermanagementComponent } from '../adminmodule/hospitalusermanagement/hospitalusermanagement.component';
import { DemographicinformationComponent } from '../patient/demographicinformation/demographicinformation.component';
import { PatientschedulingComponent } from '../scheduling/patientscheduling/patientscheduling.component';
import { MasterLayoutModule } from '../master-layout/master-layout.module';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { MaterialModule } from '../material/material.module';
import { AdminmoduleModule } from '../adminmodule/adminmodule.module';





@NgModule({
  declarations: [    
    LoginComponent,
    ChangepasswordComponent,
    UserregistrationComponent,
    PatientregistrationComponent,
    AdminregistrationComponent,
    PatientdashbordComponent,
    ForgotpasswordComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AdminmoduleModule,
    HttpClientModule,
    MasterLayoutModule,
    FormsModule,
    RouterModule.forChild([
      // {path:'',component:LoginComponent},
      {path:'', component:LoginComponent},
      {path:'ChangePassword', component:ChangepasswordComponent},
      {path:'adminregistration', component:AdminregistrationComponent,canActivate: [AuthGuard]},
      {path:'Patientregistration', component:PatientregistrationComponent},
      {path:'patientdashboard' ,component:PatientdashbordComponent,canActivate: [AuthGuard]},
      {path:'hospitalusermanagement', component:HospitalusermanagementComponent,canActivate: [AuthGuard]},
      {path:'demographicinformation' , component:DemographicinformationComponent,canActivate: [AuthGuard]},
      {path:'patientscheduling' , component:PatientschedulingComponent,canActivate: [AuthGuard]},
      {path:'forgotpassword' , component:ForgotpasswordComponent}
    ])
  ],

  
    
  exports:[ChangepasswordComponent]

})
export class UsermoduleModule { }

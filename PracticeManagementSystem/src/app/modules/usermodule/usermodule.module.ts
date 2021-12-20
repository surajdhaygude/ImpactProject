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




@NgModule({
  declarations: [    
    LoginComponent,
    ChangepasswordComponent,
    UserregistrationComponent,
    PatientregistrationComponent,
    AdminregistrationComponent,
    PatientdashbordComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([
      {path:'',component:LoginComponent},
      {path:'login', component:LoginComponent},
      {path:'ChangePassword', component:ChangepasswordComponent},
      {path:'adminregistration', component:AdminregistrationComponent},
      {path:'Patientregistration', component:PatientregistrationComponent},
      {path:'patientdashboard' ,component:PatientdashbordComponent},
      {path:'hospitalusermanagement', component:HospitalusermanagementComponent}
      
    ])
  ],

  
    
  exports:[ChangepasswordComponent]

})
export class UsermoduleModule { }

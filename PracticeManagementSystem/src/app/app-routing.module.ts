import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientregistrationComponent } from './modules/usermodule/userregistration/patientregistration/patientregistration.component';
// import { UserregistrationComponent } from './modules/usermodule/userregistration/userregistration.component';
import { AdminregistrationComponent } from './modules/usermodule/userregistration/adminregistration/adminregistration.component';
import { HospitalusermanagementComponent } from './modules/adminmodule/hospitalusermanagement/hospitalusermanagement.component';
import { LoginComponent } from './modules/usermodule/login/login.component';
import { DiagnosisComponent } from './modules/patientvisit/diagnosis/diagnosis.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:"Patientregistration",component:PatientregistrationComponent},
  {path:'adminregistration', component:AdminregistrationComponent},
  {path:'hospitalusermanagement', component:HospitalusermanagementComponent},
  {path:'diagnosis' , component:DiagnosisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

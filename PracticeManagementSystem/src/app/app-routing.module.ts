import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientregistrationComponent } from './modules/usermodule/userregistration/patientregistration/patientregistration.component';
// import { UserregistrationComponent } from './modules/usermodule/userregistration/userregistration.component';
import { AdminregistrationComponent } from './modules/usermodule/userregistration/adminregistration/adminregistration.component';
import { HospitalusermanagementComponent } from './modules/adminmodule/hospitalusermanagement/hospitalusermanagement.component';
import { LoginComponent } from './modules/usermodule/login/login.component';
import { DiagnosisComponent } from './modules/patientvisit/diagnosis/diagnosis.component';

import { PatientinformationComponent } from './modules/patientvisit/patientinformation/patientinformation.component';


import { MedicationComponent } from './modules/patientvisit/medication/medication.component';
import { ProcedureComponent } from './modules/patientvisit/procedure/procedure.component';
import { VitalsignsComponent } from './modules/patientvisit/vitalsigns/vitalsigns.component';

import { EditphysicianappointmentComponent } from './modules/scheduling/userscheduling/physicianscheduling/editphysicianappointment/editphysicianappointment.component';
import { DeletephysicianappointmentComponent } from './modules/scheduling/userscheduling/physicianscheduling/deletephysicianappointment/deletephysicianappointment.component';
import { AddnurseappointmentComponent } from './modules/scheduling/userscheduling/nursescheduling/addnurseappointment/addnurseappointment.component';
import { DeletenurseappointmentComponent } from './modules/scheduling/userscheduling/nursescheduling/deletenurseappointment/deletenurseappointment.component';
import { EditnurseappointmentComponent } from './modules/scheduling/userscheduling/nursescheduling/editnurseappointment/editnurseappointment.component';

import { PatientschedulingComponent } from './modules/scheduling/patientscheduling/patientscheduling.component';
import { NurseschedulingComponent } from './modules/scheduling/userscheduling/nursescheduling/nursescheduling.component';

import { HomescreenComponent } from './modules/master-layout/homescreen/homescreen.component';

import { AuthGuard } from './auth/auth.guard';




const routes: Routes = [
  {path:'', component:HomescreenComponent}, 
  {path:'login',component:LoginComponent},
  {path:"Patientregistration",component:PatientregistrationComponent},
  {path:'adminregistration', component:AdminregistrationComponent,canActivate: [AuthGuard]},
  {path:'hospitalusermanagement', component:HospitalusermanagementComponent,canActivate: [AuthGuard]},
  {path:'diagnosis' , component:DiagnosisComponent,canActivate: [AuthGuard]},
  {path:'patientinformation',component:PatientinformationComponent,canActivate: [AuthGuard]},
  {path:'medication' , component:MedicationComponent,canActivate: [AuthGuard]},
  {path:'procedure' , component:ProcedureComponent,canActivate: [AuthGuard]},
  {path:'vitalsigns' , component:VitalsignsComponent,canActivate: [AuthGuard]},
  {path:'editphysicianappointment', component:EditphysicianappointmentComponent,canActivate: [AuthGuard]},
  {path:'deletephysicianappointment', component:DeletephysicianappointmentComponent,canActivate: [AuthGuard]},
  {path:'addnurseappointment',component:AddnurseappointmentComponent,canActivate: [AuthGuard]},
  {path:'editnurseappointment',component:EditnurseappointmentComponent,canActivate: [AuthGuard]},
  {path:'deletenurseappointment',component:DeletenurseappointmentComponent,canActivate: [AuthGuard]},
  {path:'patientscheduling' , component:PatientschedulingComponent,canActivate: [AuthGuard]},
  {path:'nursescheduling',component:NurseschedulingComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

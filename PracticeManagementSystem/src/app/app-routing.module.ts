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
import { DemographicinformationComponent } from './modules/patient/demographicinformation/demographicinformation.component';

import { EditphysicianappointmentComponent } from './modules/scheduling/userscheduling/physicianscheduling/editphysicianappointment/editphysicianappointment.component';
import { DeletephysicianappointmentComponent } from './modules/scheduling/userscheduling/physicianscheduling/deletephysicianappointment/deletephysicianappointment.component';
import { AddnurseappointmentComponent } from './modules/scheduling/userscheduling/nursescheduling/addnurseappointment/addnurseappointment.component';
import { DeletenurseappointmentComponent } from './modules/scheduling/userscheduling/nursescheduling/deletenurseappointment/deletenurseappointment.component';
import { EditnurseappointmentComponent } from './modules/scheduling/userscheduling/nursescheduling/editnurseappointment/editnurseappointment.component';

import { PatientschedulingComponent } from './modules/scheduling/patientscheduling/patientscheduling.component';



const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:"Patientregistration",component:PatientregistrationComponent},
  {path:'adminregistration', component:AdminregistrationComponent},
  {path:'hospitalusermanagement', component:HospitalusermanagementComponent},
  {path:'diagnosis' , component:DiagnosisComponent},
  {path:'patientinformation',component:PatientinformationComponent},
  {path:'medication' , component:MedicationComponent},
  {path:'procedure' , component:ProcedureComponent},
  {path:'vitalsigns' , component:VitalsignsComponent},
  {path:'demographicinformation' , component:DemographicinformationComponent},
  {path:'editphysicianappointment', component:EditphysicianappointmentComponent},
  {path:'deletephysicianappointment', component:DeletephysicianappointmentComponent},
  {path:'addnurseappointment',component:AddnurseappointmentComponent},
  {path:'editnurseappointment',component:EditnurseappointmentComponent},
  {path:'deletenurseappointment',component:DeletenurseappointmentComponent},
  {path:'patientscheduling' , component:PatientschedulingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

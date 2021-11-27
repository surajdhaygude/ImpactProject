import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientregistrationComponent } from './modules/usermodule/userregistration/patientregistration/patientregistration.component';
import { UserregistrationComponent } from './modules/usermodule/userregistration/userregistration.component';
import { AdminregistrationComponent } from './modules/usermodule/userregistration/adminregistration/adminregistration.component';

const routes: Routes = [
  {path:"Patientregistration",component:PatientregistrationComponent},
  {path:'adminregistration', component:AdminregistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

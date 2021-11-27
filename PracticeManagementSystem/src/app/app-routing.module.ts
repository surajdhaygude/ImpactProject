import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientregistrationComponent } from './modules/usermodule/userregistration/patientregistration/patientregistration.component';
import { UserregistrationComponent } from './modules/usermodule/userregistration/userregistration.component';

const routes: Routes = [
{
  path:"Patientregistration",component:PatientregistrationComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemographicinformationComponent } from './demographicinformation/demographicinformation.component';
import { AllergyinformationComponent } from './allergyinformation/allergyinformation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { PatientdetailsdashboardComponent } from './patientdetailsdashboard/patientdetailsdashboard.component';
import { AuthGuard } from 'src/app/auth/auth.guard';



@NgModule({
  declarations: [
    DemographicinformationComponent,
    AllergyinformationComponent,
    PatientdetailsdashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'allergyinformation',component:AllergyinformationComponent,canActivate: [AuthGuard]},
      {path:'demographicinformation' , component:DemographicinformationComponent,canActivate: [AuthGuard]},
      {path:'patientdetailsdashboard',component:PatientdetailsdashboardComponent,canActivate: [AuthGuard]}

    ])

   
   
  ]
})
export class PatientModule { }

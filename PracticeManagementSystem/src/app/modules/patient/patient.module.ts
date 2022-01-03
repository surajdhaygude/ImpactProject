import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemographicinformationComponent } from './demographicinformation/demographicinformation.component';
import { AllergyinformationComponent } from './allergyinformation/allergyinformation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { PatientdetailsdashboardComponent } from './patientdetailsdashboard/patientdetailsdashboard.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { MasterLayoutModule } from '../master-layout/master-layout.module';



@NgModule({
  declarations: [
    DemographicinformationComponent,
    AllergyinformationComponent,
    PatientdetailsdashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MasterLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'allergyinformation',component:AllergyinformationComponent,canActivate: [AuthGuard]},
      {path:'demographicinformation' , component:DemographicinformationComponent,canActivate: [AuthGuard]},
      {path:'patientdetailsdashboard',component:PatientdetailsdashboardComponent,canActivate: [AuthGuard]}

    ])
  ],
  exports:[PatientdetailsdashboardComponent]
})
export class PatientModule { }

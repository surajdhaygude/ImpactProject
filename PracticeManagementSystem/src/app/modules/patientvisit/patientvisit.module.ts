import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientinformationComponent } from './patientinformation/patientinformation.component';
import { VitalsignsComponent } from './vitalsigns/vitalsigns.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { MedicationComponent } from './medication/medication.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientvisitdashboardComponent } from './patientvisitdashboard/patientvisitdashboard.component';
import { MasterLayoutModule } from '../master-layout/master-layout.module';
import { RouterModule } from '@angular/router';
import { VisitdashboardComponent } from './visitdashboard/visitdashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthGuard } from 'src/app/auth/auth.guard';




@NgModule({
  declarations: [
    PatientinformationComponent,
    VitalsignsComponent,
    DiagnosisComponent,
    ProcedureComponent,
    MedicationComponent,
    PatientvisitdashboardComponent,
    VisitdashboardComponent
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    NgxPaginationModule,
    MasterLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      // {path:'patientinformation',component:PatientinformationComponent, canActivate:[AuthGuard]},
      {path:'visitdashboard', component:VisitdashboardComponent, canActivate:[AuthGuard]},
      {path:'patientinformation/:id', component:PatientinformationComponent,canActivate: [AuthGuard]}

    ])
  ]
})
export class PatientvisitModule { }

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




@NgModule({
  declarations: [
    PatientinformationComponent,
    VitalsignsComponent,
    DiagnosisComponent,
    ProcedureComponent,
    MedicationComponent,
    PatientvisitdashboardComponent
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MasterLayoutModule,
    ReactiveFormsModule
  ]
})
export class PatientvisitModule { }

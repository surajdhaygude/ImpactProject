import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientinformationComponent } from './patientinformation/patientinformation.component';
import { VitalsignsComponent } from './vitalsigns/vitalsigns.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { MedicationComponent } from './medication/medication.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditpatientinformationComponent } from './editpatientinformation/editpatientinformation.component';



@NgModule({
  declarations: [
    PatientinformationComponent,
    VitalsignsComponent,
    DiagnosisComponent,
    ProcedureComponent,
    MedicationComponent,
    EditpatientinformationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PatientvisitModule { }

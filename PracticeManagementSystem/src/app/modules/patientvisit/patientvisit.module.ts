import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';
import { PatientinformationComponent } from './patientinformation/patientinformation.component';
import { VitalsignsComponent } from './vitalsigns/vitalsigns.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { MedicationComponent } from './medication/medication.component';



@NgModule({
  declarations: [
    PatientdetailsComponent,
    PatientinformationComponent,
    VitalsignsComponent,
    DiagnosisComponent,
    ProcedureComponent,
    MedicationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatientvisitModule { }

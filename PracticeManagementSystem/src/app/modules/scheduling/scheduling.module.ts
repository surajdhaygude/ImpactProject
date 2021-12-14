import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientschedulingComponent } from './patientscheduling/patientscheduling.component';
import { UserschedulingComponent } from './userscheduling/userscheduling.component';



@NgModule({
  declarations: [
    PatientschedulingComponent,
    UserschedulingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SchedulingModule { }

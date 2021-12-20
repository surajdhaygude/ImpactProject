import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientschedulingComponent } from './patientscheduling/patientscheduling.component';
import { UserschedulingComponent } from './userscheduling/userscheduling.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PatientschedulingComponent,
    UserschedulingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'user', component:UserschedulingComponent}
    ])
  ]
})
export class SchedulingModule { }

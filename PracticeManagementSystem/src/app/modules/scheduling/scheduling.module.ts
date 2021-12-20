import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientschedulingComponent } from './patientscheduling/patientscheduling.component';
import { UserschedulingComponent } from './userscheduling/userscheduling.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhysicianschedulingComponent } from './userscheduling/physicianscheduling/physicianscheduling.component';
import { NurseschedulingComponent } from './userscheduling/nursescheduling/nursescheduling.component';
import { EditphysicianappointmentComponent } from './userscheduling/physicianscheduling/editphysicianappointment/editphysicianappointment.component';
import { DeletephysicianappointmentComponent } from './userscheduling/physicianscheduling/deletephysicianappointment/deletephysicianappointment.component';
import { AddnurseappointmentComponent } from './userscheduling/nursescheduling/addnurseappointment/addnurseappointment.component';
import { EditnurseappointmentComponent } from './userscheduling/nursescheduling/editnurseappointment/editnurseappointment.component';
import { DeletenurseappointmentComponent } from './userscheduling/nursescheduling/deletenurseappointment/deletenurseappointment.component';



@NgModule({
  declarations: [
    PatientschedulingComponent,
    UserschedulingComponent,
    PhysicianschedulingComponent,
    NurseschedulingComponent,
    EditphysicianappointmentComponent,
    DeletephysicianappointmentComponent,
    AddnurseappointmentComponent,
    EditnurseappointmentComponent,
    DeletenurseappointmentComponent
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
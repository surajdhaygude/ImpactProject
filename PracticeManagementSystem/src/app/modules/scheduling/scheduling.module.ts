import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientschedulingComponent } from './patientscheduling/patientscheduling.component';
import { UserschedulingComponent } from './userscheduling/userscheduling.component';
import { AddpatientappointmentComponent } from './patientscheduling/addpatientappointment/addpatientappointment.component';
import { ScheduleAllModule ,ScheduleModule, RecurrenceEditorModule,DayService,WeekService,MonthService,MonthAgendaService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
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
    AddpatientappointmentComponent
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
    ReactiveFormsModule,
    ScheduleModule,
    RecurrenceEditorModule,
    ScheduleAllModule,
    FormsModule,
    RouterModule.forChild([
      {path:'addpatientappointment', component:AddpatientappointmentComponent}
    ])
  ],
  providers: [DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService ],
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'Userscheduling', component:UserschedulingComponent},
      {path:'editphysicianappointment', component:EditphysicianappointmentComponent},
      {path:'deletephysicianappointment', component:DeletephysicianappointmentComponent},
      {path:'addnurseappointment',component:AddnurseappointmentComponent},
      {path:'editnurseappointment',component:EditnurseappointmentComponent},
      {path:'deletenurseappointment',component:DeletenurseappointmentComponent}

    ])
  ]

})
export class SchedulingModule { }

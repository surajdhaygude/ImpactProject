import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientschedulingComponent } from './patientscheduling/patientscheduling.component';
import { UserschedulingComponent } from './userscheduling/userscheduling.component';
import { AddpatientappointmentComponent } from './patientscheduling/addpatientappointment/addpatientappointment.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScheduleAllModule ,ScheduleModule, RecurrenceEditorModule,DayService,WeekService,MonthService,MonthAgendaService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';


@NgModule({
  declarations: [
    PatientschedulingComponent,
    UserschedulingComponent,
    AddpatientappointmentComponent
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
      {path:'addpatientappointment', component:AddpatientappointmentComponent},
      {path:'addpatientappointment', component:AddpatientappointmentComponent}
  

    ])
    
  ],
  providers: [DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService ],
})
export class SchedulingModule { }

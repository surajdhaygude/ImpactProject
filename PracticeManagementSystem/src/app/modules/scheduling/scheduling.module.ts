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
import { NursedashboardComponent } from './userscheduling/nursescheduling/nursedashboard/nursedashboard.component';
import { PhysiciandashboardComponent } from './userscheduling/physicianscheduling/physiciandashboard/physiciandashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { MasterLayoutModule } from '../master-layout/master-layout.module';
import { PatientModule } from '../patient/patient.module';
import { SendnoteComponent } from '../inboxmodule/sendnote/sendnote.component';
import { ReceivednotesComponent } from '../inboxmodule/receivednotes/receivednotes.component';
import { SentnotesComponent } from '../inboxmodule/sentnotes/sentnotes.component';



@NgModule({
  declarations: [
    PatientschedulingComponent,
    UserschedulingComponent,
    AddpatientappointmentComponent,
    PhysicianschedulingComponent,
    NurseschedulingComponent,
    EditphysicianappointmentComponent,
    DeletephysicianappointmentComponent,
    AddnurseappointmentComponent,
    EditnurseappointmentComponent,
    DeletenurseappointmentComponent,
    NursedashboardComponent,
    PhysiciandashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ScheduleModule,
    MasterLayoutModule,
    PatientModule,
    RecurrenceEditorModule,
    NgxPaginationModule,
    ScheduleAllModule,
    FormsModule,
    RouterModule.forChild([
      {path:'addpatientappointment', component:AddpatientappointmentComponent,canActivate: [AuthGuard]},
      {path:'Userscheduling', component:UserschedulingComponent,canActivate: [AuthGuard]},
      {path:'editphysicianappointment', component:EditphysicianappointmentComponent,canActivate: [AuthGuard]},
      {path:'deletephysicianappointment', component:DeletephysicianappointmentComponent,canActivate: [AuthGuard]},
      {path:'addnurseappointment',component:AddnurseappointmentComponent,canActivate: [AuthGuard]},
      {path:'editnurseappointment',component:EditnurseappointmentComponent,canActivate: [AuthGuard]},
      {path:'deletenurseappointment',component:DeletenurseappointmentComponent,canActivate: [AuthGuard]},
      {path:'physicianscheduling',component:PhysicianschedulingComponent,canActivate: [AuthGuard]},
      {path:'patientscheduling',component:PatientschedulingComponent,canActivate: [AuthGuard]},
      {path:'sendnotes',component:SendnoteComponent},
      {path:'recievenotes',component:ReceivednotesComponent},

      {path:'sentnotes',component:SentnotesComponent}

    ])
  ],
  providers: [DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService ],
    

})
export class SchedulingModule { }

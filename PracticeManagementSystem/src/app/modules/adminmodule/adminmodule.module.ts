import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalusermanagementComponent } from './hospitalusermanagement/hospitalusermanagement.component';
import { PatientusermanagementComponent } from './patientusermanagement/patientusermanagement.component';
import { PhysiciandetailsComponent } from './hospitalusermanagement/physiciandetails/physiciandetails.component';
import { NursedetailsComponent } from './hospitalusermanagement/nursedetails/nursedetails.component';
import { CreateuserComponent } from './hospitalusermanagement/createuser/createuser.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { EdituserComponent } from './hospitalusermanagement/edituser/edituser.component';

import { AddpatientComponent } from './patientusermanagement/addpatient/addpatient.component';
import { EditpatientComponent } from './patientusermanagement/editpatient/editpatient.component';
import { CreatenurseComponent } from './hospitalusermanagement/nursedetails/createnurse/createnurse.component';
import { EditnurseComponent } from './hospitalusermanagement/nursedetails/editnurse/editnurse.component';
import { MasterLayoutModule } from '../master-layout/master-layout.module';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { MaterialModule } from '../material/material.module';
import { AllergymasterComponent } from './allergymaster/allergymaster.component';
import { DrugmasterComponent } from './drugmaster/drugmaster.component';
import { DiagnosismasterComponent } from './diagnosismaster/diagnosismaster.component';


@NgModule({
  declarations: [
    HospitalusermanagementComponent,
    PatientusermanagementComponent,
    PhysiciandetailsComponent,
    NursedetailsComponent,
    CreateuserComponent,
    EdituserComponent,
    CreatenurseComponent,
    EditnurseComponent,
    AddpatientComponent,
    EditpatientComponent,
    AdmindashboardComponent,
    AllergymasterComponent,
    DrugmasterComponent,
    DiagnosismasterComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    MasterLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forChild([
      {path:'createuser', component:CreateuserComponent,canActivate: [AuthGuard]},
      {path:'hospitalusermanagement', component:HospitalusermanagementComponent,canActivate: [AuthGuard]},
      {path:'nursedetails', component:NursedetailsComponent,canActivate: [AuthGuard]},
      {path:'edituser/:id', component:EdituserComponent,canActivate: [AuthGuard]},
      {path:'createnurse',component:CreatenurseComponent,canActivate: [AuthGuard]},
      {path:'editnurse/:id',component:EditnurseComponent,canActivate: [AuthGuard]},
      {path:'patientusermanagement',component:PatientusermanagementComponent,canActivate: [AuthGuard]},
      {path:'addpatient', component:AddpatientComponent,canActivate: [AuthGuard]},
      {path:'editPatient/:id', component:EditpatientComponent,canActivate: [AuthGuard]},
      {path:'drugmaster', component:DrugmasterComponent,canActivate: [AuthGuard]},
      {path:'diagnosismaster', component:DiagnosismasterComponent,canActivate: [AuthGuard]},
      {path:'allergysmaster', component:AllergymasterComponent,canActivate: [AuthGuard]}
    ])
  ],
  exports:[AdmindashboardComponent]
  
})

export class AdminmoduleModule { }

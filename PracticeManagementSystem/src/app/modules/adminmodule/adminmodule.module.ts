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

@NgModule({
  declarations: [
    HospitalusermanagementComponent,
    PatientusermanagementComponent,
    PhysiciandetailsComponent,
    NursedetailsComponent,
    CreateuserComponent,
    EdituserComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forChild([
      {path:'createuser', component:CreateuserComponent},
      {path:'hospitalusermanagement', component:HospitalusermanagementComponent},
      {path:'nursedetails', component:NursedetailsComponent},
      {path:'edituser/:id', component:EdituserComponent}


    ])
  ]
})
export class AdminmoduleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalusermanagementComponent } from './hospitalusermanagement/hospitalusermanagement.component';
import { PatientusermanagementComponent } from './patientusermanagement/patientusermanagement.component';
import { PhysiciandetailsComponent } from './hospitalusermanagement/physiciandetails/physiciandetails.component';
import { NursedetailsComponent } from './hospitalusermanagement/nursedetails/nursedetails.component';
import { AgGridModule } from 'ag-grid-angular';
import { CreateuserComponent } from './hospitalusermanagement/createuser/createuser.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderPipe } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    HospitalusermanagementComponent,
    PatientusermanagementComponent,
    PhysiciandetailsComponent,
    NursedetailsComponent,
    CreateuserComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    // OrderPipe,
    RouterModule.forChild([
      // {path:'',component:LoginComponent},
      {path:'createuser', component:CreateuserComponent},
      {path:'hospitalusermanagement', component:HospitalusermanagementComponent},
      {path:'nursedetails', component:NursedetailsComponent}


    ])
  ]
})
export class AdminmoduleModule { }

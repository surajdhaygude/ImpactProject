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
import { HeaderComponent } from 'ag-grid-community/dist/lib/components/framework/componentTypes';
import { MasterLayoutModule } from '../master-layout/master-layout.module';


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

  ],
  imports: [
    CommonModule,
    FormsModule,
    MasterLayoutModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forChild([
      {path:'createuser', component:CreateuserComponent},
      {path:'hospitalusermanagement', component:HospitalusermanagementComponent},
      {path:'nursedetails', component:NursedetailsComponent},
      {path:'edituser/:id', component:EdituserComponent},
      {path:'createnurse',component:CreatenurseComponent},
      {path:'editnurse/:id',component:EditnurseComponent},
      {path:'patientusermanagement',component:PatientusermanagementComponent},
      {path:'addpatient', component:AddpatientComponent},
      {path:'editPatient/:id', component:EditpatientComponent}



    ])
  ]
  
})

export class AdminmoduleModule { }

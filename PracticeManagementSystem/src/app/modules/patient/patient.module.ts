import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemographicinformationComponent } from './demographicinformation/demographicinformation.component';
import { AllergyinformationComponent } from './allergyinformation/allergyinformation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    DemographicinformationComponent,
    AllergyinformationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'allergyinformation',component:AllergyinformationComponent},
      {path:'demographicinformation' , component:DemographicinformationComponent}

    ])

   
   
  ]
})
export class PatientModule { }

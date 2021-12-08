import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemographicinformationComponent } from './demographicinformation/demographicinformation.component';
import { AllergyinformationComponent } from './allergyinformation/allergyinformation.component';



@NgModule({
  declarations: [
    DemographicinformationComponent,
    AllergyinformationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatientModule { }

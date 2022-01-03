import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../usermodule/login/login.component';
import { AdminregistrationComponent } from '../usermodule/userregistration/adminregistration/adminregistration.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    HomescreenComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([ 
    //  {path:'', component:HomescreenComponent}, 
      {path:'',component:LoginComponent},
      {path:'header',component:HeaderComponent},
      {path:'navbar', component:NavbarComponent},
      {path:'adminregistration', component:AdminregistrationComponent},
     
     
    ])
   
  ],
  exports:[HeaderComponent,NavbarComponent]
})
export class MasterLayoutModule { }

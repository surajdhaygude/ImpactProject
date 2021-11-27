import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './modules/usermodule/changepassword/changepassword.component';
import { LoginComponent } from './modules/usermodule/login/login.component';
import { AdminregistrationComponent } from './modules/usermodule/userregistration/adminregistration/adminregistration.component';

const routes: Routes = [
  
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

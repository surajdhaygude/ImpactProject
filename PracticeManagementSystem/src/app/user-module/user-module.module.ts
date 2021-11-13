import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AdminRegistrationComponent } from './user-registration/admin-registration/admin-registration.component';



@NgModule({
  declarations: [
    LoginComponent,
    UserRegistrationComponent,
    AdminRegistrationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModuleModule { }

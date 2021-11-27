import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminregistrationComponent } from './modules/usermodule/userregistration/adminregistration/adminregistration.component';

const routes: Routes = [
  {path:'adminregistration', component:AdminregistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

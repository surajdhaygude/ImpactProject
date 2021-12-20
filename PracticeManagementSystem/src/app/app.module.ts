import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminmoduleModule } from './modules/adminmodule/adminmodule.module';
import { UsermoduleModule } from './modules/usermodule/usermodule.module';
import { CutomepipePipe } from './cutomepipe.pipe';
import { MasterLayoutModule } from './modules/master-layout/master-layout.module';
import { MaterialModule } from './modules/material/material.module';
import { PatientModule } from './modules/patient/patient.module';
import { PatientvisitModule } from './modules/patientvisit/patientvisit.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InboxmoduleModule } from './modules/inboxmodule/inboxmodule.module';



@NgModule({
  declarations: [
    AppComponent,
    CutomepipePipe
  ],
  imports: [
    BrowserModule,
    UsermoduleModule,
    AdminmoduleModule,
    MasterLayoutModule,
    HttpClientModule,
    MaterialModule,
    PatientModule,
    PatientvisitModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InboxmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

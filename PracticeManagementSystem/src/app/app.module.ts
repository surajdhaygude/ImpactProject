import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminmoduleModule } from './modules/adminmodule/adminmodule.module';
import { UsermoduleModule } from './modules/usermodule/usermodule.module';
import { CutomepipePipe } from './cutomepipe.pipe';
import { HeaderComponent } from './modules/masterlayout/header/header.component';
import { NevbarComponent } from './modules/masterlayout/nevbar/nevbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CutomepipePipe,
    HeaderComponent,
    NevbarComponent
  
  ],
  imports: [
    BrowserModule,
    UsermoduleModule,
    AdminmoduleModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

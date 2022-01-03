import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendnoteComponent } from './sendnote/sendnote.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReceivednotesComponent } from './receivednotes/receivednotes.component';
import { SentnotesComponent } from './sentnotes/sentnotes.component';
import { ReplynoteComponent } from './replynote/replynote.component';
import { SidenavuserComponent } from './sidenavuser/sidenavuser.component';
import { SidenavpatientComponent } from './sidenavpatient/sidenavpatient.component';
import { TopnavpatientComponent } from './topnavpatient/topnavpatient.component';
import { TopnavuserComponent } from './topnavuser/topnavuser.component';
import { InboxuserComponent } from './inboxuser/inboxuser.component';
import { InboxpatientComponent } from './inboxpatient/inboxpatient.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { MaterialModule } from '../material/material.module';
import { MasterLayoutModule } from '../master-layout/master-layout.module';



@NgModule({
  declarations: [
    SendnoteComponent,
    ReceivednotesComponent,
    SentnotesComponent,
    ReplynoteComponent,
    SidenavuserComponent,
    SidenavpatientComponent,
    TopnavpatientComponent,
    TopnavuserComponent,
    InboxuserComponent,
    InboxpatientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    MasterLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'sendnote',component:SendnoteComponent,canActivate: [AuthGuard]},
      {path:'receivednotes',component:ReceivednotesComponent,canActivate: [AuthGuard]},
      {path:'sentnotes',component:SentnotesComponent,canActivate: [AuthGuard]},
      {path:'replynote',component:ReplynoteComponent,canActivate: [AuthGuard]},
      {path:'topnavuser',component:TopnavuserComponent,canActivate: [AuthGuard]}
    ])
  ]
})
export class InboxmoduleModule { }

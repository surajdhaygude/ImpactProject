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
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'sendnote',component:SendnoteComponent},
      {path:'receivednotes',component:ReceivednotesComponent},
      {path:'sentnotes',component:SentnotesComponent},
      {path:'replynote',component:ReplynoteComponent}
    ])
  ]
})
export class InboxmoduleModule { }

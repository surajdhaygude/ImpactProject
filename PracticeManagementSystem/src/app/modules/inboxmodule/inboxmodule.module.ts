import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendnoteComponent } from './sendnote/sendnote.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReceivednotesComponent } from './receivednotes/receivednotes.component';
import { SentnotesComponent } from './sentnotes/sentnotes.component';
import { ReplynoteComponent } from './replynote/replynote.component';



@NgModule({
  declarations: [
    SendnoteComponent,
    ReceivednotesComponent,
    SentnotesComponent,
    ReplynoteComponent
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

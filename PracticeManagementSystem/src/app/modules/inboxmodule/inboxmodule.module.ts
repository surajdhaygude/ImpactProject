import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendnoteComponent } from './sendnote/sendnote.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SendnoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'sendnote',component:SendnoteComponent}      
    ])
  ]
})
export class InboxmoduleModule { }

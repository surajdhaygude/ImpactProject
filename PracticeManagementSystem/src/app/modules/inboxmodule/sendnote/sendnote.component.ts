import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SendnoteserviceService } from 'src/app/sendnoteservice.service';
import { IUser } from 'src/IUser';

@Component({
  selector: 'app-sendnote',
  templateUrl: './sendnote.component.html',
  styleUrls: ['./sendnote.component.css']
})
export class SendnoteComponent implements OnInit {
  sendNoteForm!: FormGroup;
  isSubmitted!: boolean;
  BreakException:any = {};
  receiverddl:any="";
  showddl:any="";

  receivers: IUser[] = [];

  constructor(private fb: FormBuilder,private sendNoteService:SendnoteserviceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.sendNoteForm = this.fb.group({
      dateTime:[''],
      urgency: ['No'],
      designation:[''],
      receiver: [''],
      message:['']    
    });

    this.sendNoteService.getReceivers().subscribe(
      (data: IUser[]) => {
        this.receivers = data;
      },

      (error) => {
        console.log('error', error);
      }
    );  
  }

  get f() {
    return this.sendNoteForm?.controls;
  }

  onSubmit():void{
    debugger
    this.f.dateTime.setValue((new Date().toLocaleString()).toString());
    this.http.post<any>("http://localhost:3000/sendnotes", this.sendNoteForm.value)
      .subscribe(res =>{
      console.log(this.sendNoteForm.value);
        alert("Note sent successfully...!");
        this.sendNoteForm.reset();
      },err=>{
      alert("Somthing went wrong...!");
      })
  }  

  populateDesignation():void{
    try
    {
      this.receivers.forEach(receiver1=>{
        if(receiver1.username==this.receiverddl)
        {
          this.f.designation.setValue(receiver1.role);
          this.showddl=receiver1.role+" "+receiver1.username;
          throw this.BreakException;
        }
      });
    }
    catch(e)
    {
      console.log(e);
    }
    
  }

}

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

  receivers: IUser[] = [];

  constructor(private fb: FormBuilder,private sendNoteService:SendnoteserviceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.sendNoteForm = this.fb.group({
      dateTime:[''],
      urgency: [''],
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
    this.http.post<any>("http://localhost:3000/sentnotes", this.sendNoteForm.value)
      .subscribe(res =>{
      console.log(this.sendNoteForm.value);
        alert("Note sent successfully...!");
        this.sendNoteForm.reset();
      },err=>{
      alert("Somthing went wrong...!");
      })
  }

}

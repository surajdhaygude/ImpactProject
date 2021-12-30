import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SendnoteserviceService } from 'src/app/sendnoteservice.service';
import { IUser } from 'src/IUser';

@Component({
  selector: 'app-replynote',
  templateUrl: './replynote.component.html',
  styleUrls: ['./replynote.component.css']
})
export class ReplynoteComponent implements OnInit {

  replyNoteForm!: FormGroup;
  isSubmitted!: boolean;
  BreakException:any = {};
  receiverddl:any="";
  showddl:any="";
  localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  currentroleId:any="";

  receivers: IUser[] = [];
  
  constructor(private fb: FormBuilder,private sendNoteService:SendnoteserviceService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.localUser=localStorage.getItem('currentUser');
    this.currentUser=JSON.parse(this.localUser);
    this.currentUserId=this.currentUser.userId;
    this.currentroleId=this.currentUser.roleId
    this.replyNoteForm = this.fb.group({
      dateTime:[''],
      urgency: ['No'],
      designation:[''],
      receiver: [''],
      message:[''],
      reply:['']    
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
    return this.replyNoteForm?.controls;
  }

  onSubmit():void{

    this.f.dateTime.setValue((new Date().toLocaleString()).toString());
    this.http.post<any>("http://localhost:3000/sendnotes", this.replyNoteForm.value)
      .subscribe(res =>{
      console.log(this.replyNoteForm.value);
        alert("Note sent successfully...!");
        this.replyNoteForm.reset();
        if(this.currentroleId==2)
         {
          this.router.navigateByUrl("physicianscheduling")
          }
       else if(this.currentroleId==3)
          {
               this.router.navigateByUrl("nursescheduling")
          }
       else
          {
             this.router.navigateByUrl("patientscheduling")
          }
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
  Cancel(){
     
  if(this.currentroleId==2)
  {
    this.router.navigateByUrl("physicianscheduling")
  }
  else if(this.currentroleId==3)
  {
    this.router.navigateByUrl("nursescheduling")
  }
  else
  {
    this.router.navigateByUrl("patientscheduling")
  }
  }

}

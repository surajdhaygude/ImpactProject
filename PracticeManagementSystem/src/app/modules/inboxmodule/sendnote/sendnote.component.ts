import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { SendnoteserviceService } from 'src/app/sendnoteservice.service';
import { IUser } from 'src/IUser';

@Component({
  selector: 'app-sendnote',
  templateUrl: './sendnote.component.html',
  styleUrls: ['./sendnote.component.css']
})
export class SendnoteComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  sendNoteForm!: FormGroup;
  isSubmitted!: boolean;
  BreakException:any = {};
  receiverddl:any="";
  showddl:any="";
  localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  currentroleId:any="";


  receivers: IUser[] = [];

  constructor(private fb: FormBuilder,private notifyService : NotificationService,private sendNoteService:SendnoteserviceService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.localUser=localStorage.getItem('currentUser');
    this.currentUser=JSON.parse(this.localUser);
    this.currentUserId=this.currentUser.userId;
    this.currentroleId=this.currentUser.roleId
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
        // alert("Note sent successfully...!");
        this.notifyService.showSuccess("Note sent successfully...!", "Success");
        this.sendNoteForm.reset();
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
      // alert("Somthing went wrong...!");
      this.notifyService.showError("Something went wrong  ...!", "Error");

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

    toggleSideBar() {
      this.toggleSideBarForMe.emit();
      setTimeout(() => {
        window.dispatchEvent(
          new Event('resize')
        );
      }, 300);
    }
    sideBarOpen = true;
    sideBarToggler() {
      this.sideBarOpen = !this.sideBarOpen;
    }

}

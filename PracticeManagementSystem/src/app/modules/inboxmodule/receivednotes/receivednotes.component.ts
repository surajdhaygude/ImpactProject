import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-receivednotes',
  templateUrl: './receivednotes.component.html',
  styleUrls: ['./receivednotes.component.css']
})
export class ReceivednotesComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  p:number=1;
  receivedNotes:any[]=[];
  localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  currentroleId:any="";
  constructor(private http:HttpClient ,private notifyService : NotificationService,private router:Router) { }

  ngOnInit(): void {
    this.localUser=localStorage.getItem('currentUser');
    this.currentUser=JSON.parse(this.localUser);
    this.currentUserId=this.currentUser.userId;
    this.currentroleId=this.currentUser.roleId
    this.http.get<any>("http://localhost:3000/receivednotes")
      .subscribe( 
        (data: any[]) => {
        this.receivedNotes = data;
      },

      (error) => {
        console.log('error', error);
      });
  }

  onDelete(id:any):void{
    // alert("Are you sure, you want to delete?");
    // this.notifyService.showWarning("Are you sure, you want to delete?, ","Warning");
    this.receivedNotes.forEach(val=>{
      if(val.id==id)
      {
        val.isActive="false";
      }
    }
      )
  }

  showsenderDesignation:any="";
  showsender:any="";
  showdateTime:any="";
  showurgency:any="";
  showmessage:any="";

  showReceivedNote(receivedNoteId:any):void{
    this.receivedNotes.forEach(val=>{
      if(val.id==receivedNoteId)
      {
        this.showsenderDesignation=val.senderDesignation;
        this.showsender=val.sender;
        this.showdateTime=val.dateTime;
        this.showurgency=val.urgency;
        this.showmessage=val.message;
      }
    }
      )
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

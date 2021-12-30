import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sentnotes',
  templateUrl: './sentnotes.component.html',
  styleUrls: ['./sentnotes.component.css']
})
export class SentnotesComponent implements OnInit {

  sentNotes:any[]=[];
  localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  currentroleId:any="";
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.localUser=localStorage.getItem('currentUser');
    this.currentUser=JSON.parse(this.localUser);
    this.currentUserId=this.currentUser.userId;
    this.currentroleId=this.currentUser.roleId
    this.http.get<any>("http://localhost:3000/sentnotes")
      .subscribe( 
        (data: any[]) => {
        this.sentNotes = data;
      },

      (error) => {
        console.log('error', error);
      });
  }

  onDelete(id:any):void{
    alert("Are you sure, you want to delete?");
    this.sentNotes.forEach(val=>{
      if(val.id==id)
      {
        val.isActive="false";
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
}

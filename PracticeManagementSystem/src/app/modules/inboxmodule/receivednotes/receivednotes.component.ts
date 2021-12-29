import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receivednotes',
  templateUrl: './receivednotes.component.html',
  styleUrls: ['./receivednotes.component.css']
})
export class ReceivednotesComponent implements OnInit {

  receivedNotes:any[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
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
    alert("Are you sure, you want to delete?");
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

}

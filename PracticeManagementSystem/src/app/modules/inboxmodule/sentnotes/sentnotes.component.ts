import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentnotes',
  templateUrl: './sentnotes.component.html',
  styleUrls: ['./sentnotes.component.css']
})
export class SentnotesComponent implements OnInit {

  sentNotes:any[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
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
}

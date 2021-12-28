import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{EventSettingsModel, View} from '@syncfusion/ej2-angular-schedule';
import { SchedulingService } from 'src/app/scheduling.service';

@Component({

  selector: 'app-patientscheduling',
  //template: `<ejs-schedule  [selectedDate]='selectedDate' [currentView]='currentView' [eventSettings]='eventSettings'></ejs-schedule>`,
  //templateUrl: './patientscheduling.component.html',
  templateUrl: './patientscheduling.component.html',
  styleUrls: ['./patientscheduling.component.css']
})
export class PatientschedulingComponent implements OnInit {

    calenderData:any[]=[]
  Id:number=0;
  //createdBy:number=0;
  Subject:string="";
  StartTime:string="";
  EndTime:string="";

  constructor(private router:Router,private service:SchedulingService) { }

  ngOnInit(): void {
    this.service.GetPatientCalenderData().subscribe(
        (data) => {
          debugger
          //this.calenderData = data;
          this.Id=data.createdBy;
          this.Subject=data.meetingTitle;
          this.StartTime=data.timeOfAppointment;
          this.EndTime=data.timeOfAppointment;

        })
  }
//   public selectedDate: Date = new Date(2021, 12, 18);
public eventSettings: EventSettingsModel = {
    dataSource: [
    { 
        Id:this.Id,
        Subject:this.Subject,
       //Subject: 'Thule Air Crash Report',
        StartTime: new Date(2021, 11, 21, 2, 0),
        EndTime: new Date(2021, 11, 21, 3,0)
    }
    // , {
    //     Id: 2,
    //     Subject: 'Thule Air Crash Report',
    //     StartTime: new Date(2021, 12, 12, 12, 0),
    //     EndTime: new Date(2021, 12, 12, 14, 0)
    // }, {
    //     Id: 3,
    //     Subject: 'Blue Moon Eclipse',
    //     StartTime: new Date(2021, 12 ,13, 9, 30),
    //     EndTime: new Date(2021, 12, 13, 11, 0)
    // }, {
    //     Id: 4,
    //     Subject: 'Meteor Showers in 2018',
    //     StartTime: new Date(2021, 12, 14, 13, 0),
    //     EndTime: new Date(2021, 12, 14, 14, 30)
    // }
]
};
 

public selectedDate: Date = new Date(2021, 12, 27);
public currentView: View = 'Month';

backtoDashbors(){
    this.router.navigateByUrl('patientdashboard')
}

createappointment(){
    this.router.navigateByUrl('addpatientappointment')
}

}

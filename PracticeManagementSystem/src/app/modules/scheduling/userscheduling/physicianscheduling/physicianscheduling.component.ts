import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-physicianscheduling',
  templateUrl: './physicianscheduling.component.html',
  styleUrls: ['./physicianscheduling.component.css']
})
export class PhysicianschedulingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public eventSettings: EventSettingsModel = {
    dataSource: [
    {
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2021, 12, 15, 9, 30),
        EndTime: new Date(2021, 12, 15, 11, 0)
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: new Date(2021, 12, 12, 12, 0),
        EndTime: new Date(2021, 12, 12, 14, 0)
    }, {
        Id: 3,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2021, 12 ,13, 9, 30),
        EndTime: new Date(2021, 12, 13, 11, 0)
    }, {
        Id: 4,
        Subject: 'Meteor Showers in 2018',
        StartTime: new Date(2021, 12, 14, 13, 0),
        EndTime: new Date(2021, 12, 14, 14, 30)
    }]
};
 

public selectedDate: Date = new Date(2021, 12, 18);
public currentView: View = 'Month';

backtoDashbors(){
    this.router.navigateByUrl('patientdashboard')
}

createappointment(){
    this.router.navigateByUrl('addpatientappointment')
}

}

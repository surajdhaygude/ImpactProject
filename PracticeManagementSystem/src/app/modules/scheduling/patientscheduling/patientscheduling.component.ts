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
  StartTime:Date=new Date()
  EndTime:any;
  setstartdatearray!:any;
  setenddatearray!:any;
  setyear!:any;
  setmonth!:any;
  setday!:any;
  setstrthours!:any;
  setendendhours!:any;
  setstartmin!:any;
  setendmin!:any;
  constructor(private router:Router,private service:SchedulingService) {
   
   }
d:any="";
p:number=1;
  ngOnInit(): void
  {
     this.service.GetAppointmentDetails().subscribe(
        data=> {
         
          this.calenderData = data;
       

        
          // this.Id=data.createdBy;
          // this.Subject=data.meetingTitle;
          // this.StartTime=new Date(data.dateOfAppointment);
          // this.EndTime=data.timeOfAppointment;
          
          //convertdate(this.StartTime,this.EndTime);
        })
  }
        //-------
      //var fulldate;
      // var startdatearray;
      // var enddatearray;
      //  var month;
      //     var day;
      //     var year;
      //     var strthours;
      //     var startmin;var endendhours; var endmin;
         //-----------------

        // function  dateTest(date:Date):void{
        //   debugger
        //   var month=date.getMonth();
        //   var day=date.getDate();
        //   var year=date.getFullYear();
        //   var hours=date.getHours();
        //   var minutes=date.getMinutes();
        //   console.log("Current Time: "+hours+":"+minutes+":"+day+":"+month+":"+year); 
        //   fulldate=new Date(year,month,day, hours, minutes)
        //   console.log(fulldate)
        // }
        // var date=new Date();
        // dateTest(date);

      /**
       * name
       */
      //----------------
    //  function convertdate(date1:Date , time:any){
    //       debugger
    //       month=date1.getMonth();
    //       day=date1.getDate();
    //       year=date1.getFullYear();
    //       var hours=time.split(":"); 
    //        strthours=hours[0];
    //       var startminarray=hours[1].split(" ");
    //      startmin=startminarray[0]

    //       var endhoursarray=hours[1].split("- ")
    //        endendhours =endhoursarray[1];
    //       var endmindarray=hours[2].split(" pm");
    //        endmin=endmindarray[0];
    //       console.log(strthours+","+startmin+","+endendhours+","+endmin);

    //---------------------------
          //var minutes=time.getMinutes();
          // startdatearray=year+","+month+","+day+","+strthours+","+0;
          // console.log(startdatearray);

          // enddatearray=year+","+month+","+day+","+endendhours+","+0;
          // console.log(enddatearray);
          //console.log(fulldate1);
      //--------1  }
        // this.setstartdatearray=startdatearray;
        // this.setenddatearray=enddatearray
        
        // this.setyear=year
        // this.setmonth=month
        // this.setday=day
        // this.setstrthours=strthours
        // this.setendendhours=endendhours
        // this.setstartmin=startmin
        // this.setendmin=endmin
 //1 }



  



//   public selectedDate: Date = new Date(2021, 12, 18);
public eventSettings: EventSettingsModel = {
  
    dataSource: [
    { 
   
        Id:this.Id,
        Subject:this.Subject,
       //Subject: 'Thule Air Crash Report',
        StartTime: new Date(this.setyear,this.setmonth,this.setday,this.setstrthours,0),
        EndTime: new Date(this.setyear,this.setmonth,this.setday,this.setendendhours,0)
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

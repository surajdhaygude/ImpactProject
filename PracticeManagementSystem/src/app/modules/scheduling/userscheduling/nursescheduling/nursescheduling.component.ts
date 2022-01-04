import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import { SchedulingService } from 'src/app/scheduling.service';

@Component({
  selector: 'app-nursescheduling',
  templateUrl: './nursescheduling.component.html',
  styleUrls: ['./nursescheduling.component.css']
})
export class NurseschedulingComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

    calenderData:any[]=[]
  constructor(private router:Router,private service:SchedulingService) { }
  d:any="";
  p:number=1;
  ngOnInit(): void {
    this.service.GetAllScheduling().subscribe(
        data=> {
         debugger
          this.calenderData = data;
      });
}


Editappointment(){
    this.router.navigateByUrl('editnurseappointment')
}

createappointment(){
    this.router.navigateByUrl('addnurseappointment')
}


Deleteappointment(){
    this.router.navigateByUrl('deletenurseappointment')
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

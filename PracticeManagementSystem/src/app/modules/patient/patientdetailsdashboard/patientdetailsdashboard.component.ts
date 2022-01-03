import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/authservices.service';

@Component({
  selector: 'app-patientdetailsdashboard',
  templateUrl: './patientdetailsdashboard.component.html',
  styleUrls: ['./patientdetailsdashboard.component.css']
})
export class PatientdetailsdashboardComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  imgurl:string="./assets/Images/logo1.jpg"
  constructor( private route:Router,private service:AuthservicesService) { }

  ngOnInit(): void {
  }

  SignOut(){
    this.service.logout();
   this.route.navigateByUrl('');
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

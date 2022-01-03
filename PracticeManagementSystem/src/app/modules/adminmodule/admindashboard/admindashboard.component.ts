import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/authservices.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  localUser:any="";
  currentUser:any="";
  currentEmail:any="";
  currentFname:any="";

  currentLname:any="";

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  imgurl:string="./assets/Images/logo1.jpg"
  constructor( private route:Router,private service:AuthservicesService) { }

  ngOnInit(): void {
          this.localUser=localStorage.getItem('currentUser');
          this.currentUser=JSON.parse(this.localUser);
          this.currentEmail=this.currentUser.email;
          this.currentFname=this.currentUser.fname;
          this.currentLname=this.currentUser.lname;
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

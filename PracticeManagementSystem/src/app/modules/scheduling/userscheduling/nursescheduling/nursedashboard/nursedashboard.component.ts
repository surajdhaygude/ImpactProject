import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/authservices.service';

@Component({
  selector: 'app-nursedashboard',
  templateUrl: './nursedashboard.component.html',
  styleUrls: ['./nursedashboard.component.css']
})
export class NursedashboardComponent implements OnInit {

  constructor(private route:Router,private service:AuthservicesService) { }
  localUser:any="";
  currentUser:any="";
  currentEmail:any="";
  currentFname:any="";

  currentLname:any="";
  currentroleId:any=""
  ngOnInit(): void {

    this.localUser=localStorage.getItem('currentUser');
 this.currentUser=JSON.parse(this.localUser);
 this.currentEmail=this.currentUser.email;
 this.currentFname=this.currentUser.fname;
 this.currentLname=this.currentUser.lname;
 this.currentroleId=this.currentUser.roleId;
  }
  SignOut(){
    this.service.logout();
   this.route.navigateByUrl('');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavpatient',
  templateUrl: './sidenavpatient.component.html',
  styleUrls: ['./sidenavpatient.component.css']
})
export class SidenavpatientComponent implements OnInit {
  localUser:any="";
  currentUser:any="";
  currentEmail:any="";
  currentFname:any="";

  currentLname:any="";
  currentroleId:any=""
  constructor() { }

  ngOnInit(): void {
    this.localUser=localStorage.getItem('currentUser');
    this.currentUser=JSON.parse(this.localUser);
    this.currentEmail=this.currentUser.email;
    this.currentFname=this.currentUser.fname;
    this.currentLname=this.currentUser.lname;
    this.currentroleId=this.currentUser.roleId;
  }

}

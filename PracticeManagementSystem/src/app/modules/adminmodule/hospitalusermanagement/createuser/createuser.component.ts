import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder,Validators} from '@angular/forms'
  import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HospitalmanagementService } from 'src/app/hospitalmanagement.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  public Physicianform!:FormGroup
  constructor(private formbuilder:FormBuilder, private http:HttpClient, private route:Router, private hospitaluser:HospitalmanagementService) { }
  number:Number=0;
  ngOnInit(): void {
    this.Physicianform=this.formbuilder.group({
      title:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      emailId:['',[Validators.required, Validators.email]],
      dob:['',Validators.required],
      doj:['',Validators.required],
      roleId:[''],
      username:[''],
      status:['',Validators.required]
      })
  }
  get f() {

    return this.Physicianform?.controls;

  }
  setemailid:any="";

  AddPhysician(){   
    debugger;
    this.f.roleId.setValue(1);
    this.f.username.setValue(this.setemailid);
    this.hospitaluser.AddPhysicianrecords(this.Physicianform.value).subscribe(res =>{
    alert("Phaysician details successfully...!")
    this.Physicianform.reset();
    this.route.navigateByUrl('hospitalusermanagement');
    },err=>{
     alert("Somthing went wrong...!")
    })
   }

   backtophysicain():void{
    this.route.navigateByUrl('hospitalusermanagement');
   }
}

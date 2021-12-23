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
      id:[''],
      Name:['',Validators.required],
      emailid:['',[Validators.required, Validators.email]],
      DateofJoining:['',Validators.required],
      Status:['',Validators.required],
      })
  }
  
  AddPhysician(){   
    debugger;
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

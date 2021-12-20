import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NursemanagementService } from 'src/app/nursemanagement.service';

@Component({
  selector: 'app-createnurse',
  templateUrl: './createnurse.component.html',
  styleUrls: ['./createnurse.component.css']
})
export class CreatenurseComponent implements OnInit {
  public Nurseform!:FormGroup
  constructor(private formbuilder:FormBuilder, private http:HttpClient,
    private route:Router,private hospitalnurse:NursemanagementService) { }

    ngOnInit(): void {
      this.Nurseform=this.formbuilder.group({
        Name:['',Validators.required],
        emailid:['',[Validators.required, Validators.email]],
        DateofJoining:['',Validators.required],
        Status:['',Validators.required],
        })
    }
    AddNurse(){   
      this.hospitalnurse.AddNurserecords(this.Nurseform.value).subscribe(res =>{
      alert("Nurse details successfully...!")
      this.Nurseform.reset();
      this.route.navigateByUrl('nursedetails');
  
      },err=>{
       alert("Somthing went wrong...!")
      })
     }
  
     backtoNurse():void{
      this.route.navigateByUrl('nursedetails');
     }
  
  
}

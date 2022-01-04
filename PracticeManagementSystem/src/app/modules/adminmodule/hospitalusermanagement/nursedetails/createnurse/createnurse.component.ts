import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
    @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
    ngOnInit(): void {
      this.Nurseform=this.formbuilder.group({
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

      return this.Nurseform?.controls;
  
    }
    setemailid:any="";
    AddNurse(){   
      debugger
      this.f.roleId.setValue(3);
      this.f.username.setValue(this.setemailid);
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

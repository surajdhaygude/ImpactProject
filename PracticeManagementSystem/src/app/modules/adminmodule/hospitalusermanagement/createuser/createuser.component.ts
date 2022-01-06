import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import{FormGroup, FormBuilder,Validators} from '@angular/forms'
  import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HospitalmanagementService } from 'src/app/hospitalmanagement.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  public Physicianform!:FormGroup
  constructor(private formbuilder:FormBuilder,private notifyService : NotificationService, private http:HttpClient, private route:Router, private hospitaluser:HospitalmanagementService) { }
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
    this.f.roleId.setValue(2);
    this.f.username.setValue(this.setemailid);
    this.hospitaluser.AddPhysicianrecords(this.Physicianform.value).subscribe(res =>{
    // alert("Phaysician details successfully...!")
    this.notifyService.showSuccess("Phaysician details successfully...!", "Success");
    this.Physicianform.reset();
    this.route.navigateByUrl('hospitalusermanagement');
    },err=>{
    //  alert("Somthing went wrong...!")
     this.notifyService.showError("Something went wrong  ...!", "Error");
    })
   }

   backtophysicain():void{
    this.route.navigateByUrl('hospitalusermanagement');
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

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import{FormGroup, FormBuilder,Validators} from '@angular/forms'
  import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HospitalmanagementService } from 'src/app/hospitalmanagement.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  public ProviderForm!:FormGroup

  Curruntdate:Date=new Date();
  constructor(private formbuilder:FormBuilder,private notifyService : NotificationService, private http:HttpClient,private route:Router, private service:HospitalmanagementService) { }


  radiobuttonvalue:string="";
  ngOnInit(): void {
    this.ProviderForm=this.formbuilder.group({
      title:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      emailId:['',[Validators.required, Validators.email]],
      dob:['',Validators.required],
      doj:['',Validators.required],
      roleId:['',Validators.required],
      username:[''],
      status:[''],
      })
  }
 get f() {

    return this.ProviderForm?.controls;

  }
  DOBCheck():Date{
    debugger
    //console.log(this.Curruntdate);
    return this.Curruntdate;
  }
  setemailid:any="";
  setroleid="";
  providerregister(){
    debugger
    if(this.setroleid=="Physician"){this.f.roleId.setValue(2)}
    else if(this.setroleid=="Nurse"){this.f.roleId.setValue(3)}
    else{this.f.roleId.setValue(1)}
    
    this.f.status.setValue('Active');
    this.f.username.setValue(this.setemailid);
    this.service.Providerregistration(this.ProviderForm.value).subscribe(res =>{
      // alert("Addmin registration details added successfully...!");
      this.notifyService.showSuccess("Addmin registration details added successfully...!", "Success")
      this.ProviderForm.reset();
      this.route.navigateByUrl('hospitalusermanagement');
      },err=>{
      //  alert("Somthing went wrong...!")
      this.notifyService.showError("Something went wrong  ...!", "Error")

      })
  }

  BacktoLogin(){
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

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';


@Component({
  selector: 'app-patientregistration',
  templateUrl: './patientregistration.component.html',
  styleUrls: ['./patientregistration.component.css']
})
export class PatientregistrationComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  public UserForm!:FormGroup


  constructor(private formbuilder:FormBuilder,private notifyService : NotificationService,
              private http:HttpClient, private route:Router         
     ) { }

  ngOnInit(): void {

  this.UserForm=this.formbuilder.group({
      title:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      emailid:['',[Validators.required,Validators.email]],
      dob:['',Validators.required],
      contactno:['',[Validators.required, Validators.max(10)]],
      password:['',Validators.required], 
      confirmpassword:['',Validators.required],
      roleId:[''],
      username:[''],
      status:[''],
      })
    }  
    // get getControl(){
    //   return this.UserForm.controls;
    // }
    get f() {

      return this.UserForm?.controls;
  
    }
    setemailid:any="";
    onSubmit():void
    {
    //   console.log(this.UserForm.get('titleradio')?.value);
    // console.log(this.UserForm.get('firstname')?.value);
    // console.log(this.UserForm.get('lastname')?.value);
    // console.log(this.UserForm.get('emailid')?.value);
    //  console.log(this.UserForm.get('password')?.value);
    // console.log(this.UserForm.get('dob')?.value);
    // console.log(this.UserForm.get('contactnumber')?.value);
    this.f.roleId.setValue(4);
    this.f.status.setValue('Active');
    this.f.username.setValue(this.setemailid);
    this.http.post<any>("http://localhost:29345/api/admins/CreateUser", this.UserForm.value)

    .subscribe(res =>{
 
     console.log(this.UserForm.value);
 
      // alert("Patient registration successfully...!")
      this.notifyService.showSuccess("Patient registration successfully...!", "Success")
      this.UserForm.reset();
      this.route.navigateByUrl('');
 
    },err=>{
 
    //  alert("Somthing went wrong  ...!")
     this.notifyService.showError("Something went wrong  ...!", "Error")
    })
    }

    BacktoLogin(){
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

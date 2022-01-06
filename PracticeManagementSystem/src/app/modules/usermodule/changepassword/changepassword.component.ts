import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  localUser:any="";
  currentUser:any="";
  currentUserId:any="";
  currentroleId:any="";
  currentPassword:any="";


    // hide: boolean = false;
    // loading = false;
     submitted:boolean = false;
    //passwordRegex: any = '((?=.*\d)(?=.*[a-zA-Z]).{4,20})' ;
    
    changepassForm!:FormGroup
  constructor(private fb:FormBuilder,private notifyService : NotificationService, private http:HttpClient, private route:Router) { }

  ngOnInit(): void {
    this.localUser=localStorage.getItem('currentUser');
          this.currentUser=JSON.parse(this.localUser);
          this.currentUserId=this.currentUser.userId;
          this.currentroleId=this.currentUser.roleId;
          this.currentPassword=this.currentUser.password;
    this.changepassForm= this.fb.group({
      password :['' ,[Validators.required,  Validators.minLength(8)]],
      newpassword:['',[Validators.required, Validators.minLength(8)]],
      confirmnewpassword:["",[Validators.required]],
    },
    {
      validator: this.ConfirmedValidator('newpassword', 'confirmnewpassword')
    })
  }
  get f() { return this.changepassForm.controls; } 
  ConfirmedValidator(controlName:string,matchingControlName:string){
      return(formGroup:FormGroup)=>{
      
      const control=formGroup.controls[controlName];
      const matchingcontrol =formGroup.controls[matchingControlName];
      if(matchingcontrol.errors && matchingcontrol.errors.confirmedValidator)
      { 
        return  
      }
      if(control.value !== matchingcontrol.value){
       matchingcontrol.setErrors({confirmedValidator:true})
      }
      else{
       matchingcontrol.setErrors(null)
      }
      
    }}

     onSubmit():void{
      
      if(this.changepassForm.valid)
      {
         if(this.currentPassword==this.changepassForm.value.password)
        // console.log(this.changepassForm.get('password')?.value);
        // console.log(this.changepassForm.get('newpassword')?.value);
        // console.log(this.changepassForm.get('confirmnewpassword')?.value);
        debugger;
        this.http.post<any>("http://localhost:3000/changepassForm", this.changepassForm.value)

      .subscribe(res =>{
  
       console.log(this.changepassForm.value);
            // alert("password change successfully...!")
            this.notifyService.showSuccess("Password changed successfully...!", "Success");
       this.changepassForm.reset();
  
      },err=>{
  
      //  alert("Somthing went wrong  ...!")
       this.notifyService.showError("Something went wrong  ...!", "Error")
      })
      }
      else{
        console.log("form is invalid ");
      }
       }

       BacktoLogin(){
         this.route.navigateByUrl('');
       }

}

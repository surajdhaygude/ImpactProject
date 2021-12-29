import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  submitted:boolean = false;
  ForgotPassword!:FormGroup
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private fb:FormBuilder, private http:HttpClient, private route:Router) { }

  ngOnInit(): void {
    this.ForgotPassword= this.fb.group({
      email :['' ,[Validators.required]],
  }) 
}

setemail:any;

onSubmit():void{


      
  if(this.ForgotPassword.valid)
  {
  
    // console.log(this.changepassForm.get('password')?.value);
    // console.log(this.changepassForm.get('newpassword')?.value);
    // console.log(this.changepassForm.get('confirmnewpassword')?.value);
    http://localhost:29345/api/admins/GetUserById/${id}
    debugger;
    this.http.post<any>("http://localhost:18311/api/inboxs/sendmail", this.ForgotPassword.value)
    


  .subscribe(res =>{

   console.log(this.ForgotPassword.value);
        alert("Email Send Successfully...!")
   this.ForgotPassword.reset();
   this.route.navigateByUrl('login');

  },err=>{

   alert("Somthing went wrong  ...!")

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


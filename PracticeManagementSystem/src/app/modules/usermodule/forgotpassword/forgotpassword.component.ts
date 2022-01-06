import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  submitted:boolean = false;
  ForgotPassword!:FormGroup
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private fb:FormBuilder,private notifyService : NotificationService, private http:HttpClient, private route:Router) { }

  ngOnInit(): void {
    this.ForgotPassword= this.fb.group({
      email :['' ,[Validators.required]],
  }) 
}

setemail:any="";
username:string="Suraj Dhaygude";
address:string="";
onSubmit():void{


      
  if(this.ForgotPassword.valid)
  {
  
    // console.log(this.changepassForm.get('password')?.value);
    // console.log(this.changepassForm.get('newpassword')?.value);
    // console.log(this.changepassForm.get('confirmnewpassword')?.value);
   // http://localhost:29345/api/admins/GetUserById/${id}
 //http://localhost:18311/api/inboxs/sendmail?username=Atish&address=atishlangote28@gmail.com
//`http://localhost:29345/api/admins/GetUserById/${id}`
//  "http://localhost:18311/api/inboxs/sendmail", this.ForgotPassword.value
    debugger;
    this.http.post<any>("http://localhost:18311/api/inboxs/sendmail",this.setemail)
    


  .subscribe(res =>{

   console.log(this.ForgotPassword.value);
        // alert("Email Send Successfully...!")
        this.notifyService.showSuccess("Email Send Successfully...!", "Success")
   this.ForgotPassword.reset();
   this.route.navigateByUrl('login');

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


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthservicesService } from 'src/app/authservices.service';
import { UserserviceService } from 'src/app/userservice.service';
import { IUser } from 'src/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private userService:UserserviceService,private route:Router, private service:AuthservicesService) { }  

  loginForm!: FormGroup;
  isSubmitted!: boolean;
  localUser:any="";
  currentUser:any="";
  currentUserId:any="";

  users: IUser[] = [];
 
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],    
    });

    this.userService.getUsers().subscribe(
      (data: IUser[]) => {
        this.users = data;
      },

      (error) => {
        console.log('error', error);
      }
    );  
  }

  get f() {
    return this.loginForm?.controls;
  }

  login(): void {   
    if(this.loginForm.valid){
  
      this.service.login(this.loginForm.value).subscribe(result =>{
        debugger
        if(result !=null){

          localStorage.setItem('currentUser', JSON.stringify(result));
          // console.log("From local storage");
           //console.log(localStorage.getItem('currentUser'));
           this.localUser=localStorage.getItem('currentUser');
          this.currentUser=JSON.parse(this.localUser);
          this.currentUserId=this.currentUser.userId;

          this.service.isLoggedIn();
          console.log("From service");
          console.log(result);
         
          this.isSubmitted = true;
          console.log(this.f.username.errors?.username);
          console.log('password' + JSON.stringify(this.f.password.errors));
      
          // if (this.validateUser(this.loginForm.value)) {      
            if(result.roleId==1)
            {
                this.route.navigateByUrl("hospitalusermanagement");
            }
            else if(result.roleId==2){
              this.route.navigateByUrl("physicianscheduling");
            }
            else if(result.roleId==3){
              this.route.navigateByUrl("nursescheduling");
            }
            else
            {
              this.route.navigateByUrl("patientscheduling");
            }
          } 
          else {
            alert('Please enter valid credentials');
           
            return;
          }

        // }
      })
    }
  }


  role:any;

  validateUser(user: any): boolean {    
    let isUserValid: boolean = false;
    debugger
    this.users.forEach((user1: IUser) => {
      if (user1.username === user.username) {
        if (user1.password === user.password) {
          isUserValid = true;
          this.role=user1.role;
        }
      }
    });
    return isUserValid;
  }
}

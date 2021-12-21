import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from 'src/app/userservice.service';
import { IUser } from 'src/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private userService:UserserviceService,private route:Router) { }  

  loginForm!: FormGroup;
  isSubmitted!: boolean;

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
    this.isSubmitted = true;
    console.log(this.f.username.errors?.username);
    console.log('password' + JSON.stringify(this.f.password.errors));

    if (this.validateUser(this.loginForm.value)) {      
      if(this.role=="admin")
      {
          this.route.navigateByUrl("hospitalusermanagement");
      }
      else if(this.role=="physician"){
        this.route.navigateByUrl("physicianscheduling");
      }
      else if(this.role=="nurse"){
        // this.route.navigateByUrl("hospitalusermanagement");
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

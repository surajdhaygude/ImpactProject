import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserserviceService } from 'src/app/userservice.service';
import { IUser } from 'src/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSubmitted: boolean=false;

  constructor(private fb: FormBuilder,private userService:UserserviceService) { }

  /*loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });*/

  //loginForm:FormGroup|any=null;

  //isSubmitted=false;
  

  users:Observable<IUser[]> | any=null;

  loginForm:FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],    
  });

  get f() { return this.loginForm.controls; }

  onSubmit() { 

    // const Entereduser = {     
    //   user: f.controls.username.value,      
    //   password: f.controls.password.value 
    // };

    this.isSubmitted = true;
   
    if (this.loginForm.invalid) {
        return;
    }

    if (this.loginForm.valid) {
      const enteredUser=this.loginForm.value;
      this.users=this.userService.getUsers(); 
      
    }
 
  }

  ngOnInit(): void {
   
  }

}

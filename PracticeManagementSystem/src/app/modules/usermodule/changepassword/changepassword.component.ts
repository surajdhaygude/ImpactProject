import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

    // hide: boolean = false;
    // loading = false;
     submitted:boolean = false;
    //passwordRegex: any = '((?=.*\d)(?=.*[a-zA-Z]).{4,20})' ;
    
    changepassForm!:FormGroup
  constructor(private fb:FormBuilder, private http:HttpClient, private route:Router) { }

  ngOnInit(): void {
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
      
        // console.log(this.changepassForm.get('password')?.value);
        // console.log(this.changepassForm.get('newpassword')?.value);
        // console.log(this.changepassForm.get('confirmnewpassword')?.value);
        debugger;
        this.http.post<any>("http://localhost:3000/changepassForm", this.changepassForm.value)

      .subscribe(res =>{
  
       console.log(this.changepassForm.value);
            alert("password change successfully...!")
       this.changepassForm.reset();
  
      },err=>{
  
       alert("Somthing went wrong  ...!")
  
      })
      }
      else{
        console.log("form is invalid ");
      }
       }

       BacktoLogin(){
         this.route.navigateByUrl("login");
       }

}

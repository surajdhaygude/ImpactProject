import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder,Validators} from '@angular/forms'
  import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent implements OnInit {

  public ProviderForm!:FormGroup

  Curruntdate:Date=new Date();
  constructor(private formbuilder:FormBuilder, private http:HttpClient,private route:Router ) { }

  radiobuttonvalue:string="";
  ngOnInit(): void {
    this.ProviderForm=this.formbuilder.group({
      title:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      emailid:['',[Validators.required, Validators.email]],
      dob:['',Validators.required],
      role:['',Validators.required],
      })
  }

  DOBCheck():Date{
    debugger
    //console.log(this.Curruntdate);
    return this.Curruntdate;
  }
  providerregister(){
   this.http.post<any>("http://localhost:3000/PrividerRegister", this.ProviderForm.value)
   .subscribe(res =>{
    console.log(this.ProviderForm.value);
     alert("Provider registration successfully...!")
     this.ProviderForm.reset();
   },err=>{
    alert("Somthing went wrong...!")
   })
  }

  BacktoLogin(){
    this.route.navigateByUrl("login");
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientUser } from 'src/app/models/Patientusers';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.css']
})
export class EditpatientComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  public updatepatient!:FormGroup;
  userId:number=0;
  EmpID:number=0;
  title:string="";
  firstname:string="";
  lastname:string="";
  dob:Date=new Date();
  doj:Date=new Date();
  Status:string="";
  EditStatus:string="";
  emailId:string="";
  status:string="";
  contactNo:number=0;


  constructor(private formbuilder:FormBuilder,private route: ActivatedRoute, private router: Router, private rs:PatientService,private navigation:Router ) { 
    
  }

  val: any;
  Patientuser!:PatientUser
  setemailid:any="";
  ngOnInit(): void {
    this.updatepatient=this.formbuilder.group({
      userId:[''],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      emailid:['',[Validators.required,Validators.email]],
      dob:['',Validators.required],
      contactNo:['',[Validators.required, Validators.max(10)]],
      status:['',Validators.required],
      })

    this.route.params.subscribe(params => {
      this.val = params['id']
    });
    console.log(this.val);
    debugger
    this.rs.getUpdatePatient(this.val).subscribe(data =>{
     this.userId=data.userId;
      this.firstname=data.firstname;
      this.lastname=data.lastname;
      this.emailId=data.emailId;
      this.dob=data.dob;
      this.doj=data.doj;
      this.status=data.status;
      this.contactNo=data.contactNo
    })
  }
  get f() {

    return this.updatepatient?.controls;

  }
  backtopatient():void{
    this.router.navigateByUrl('patientusermanagement');
   }
   employeeid:any=""
   updatepatientdata(){
    debugger
    this.employeeid=this.userId;
  
     this.f.userId.setValue(this.employeeid);
     this.rs.updatepatient(this.updatepatient.value).subscribe(res =>{
      alert("Patient details update successfully...!")
      this.updatepatient.reset();
      this.navigation.navigateByUrl('patientusermanagement');
      },err=>{
       alert("Somthing went wrong...!")
      })
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

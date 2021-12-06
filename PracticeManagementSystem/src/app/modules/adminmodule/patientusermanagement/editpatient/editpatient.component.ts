import { Component, OnInit } from '@angular/core';
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

  public updatepatient!:FormGroup;

    id:number=0;
    PatientId:number=0;
    PatientName:string="";
    Dateofbirth:Date=new Date();
    Status:string="";
    EditStatus:string="";
    EmailId:string="";
    Manage:string="";


  constructor(private formbuilder:FormBuilder,private route: ActivatedRoute, private router: Router, private rs:PatientService,private navigation:Router ) { 
    
  }

  val: any;
  Patientuser!:PatientUser
  
  ngOnInit(): void {
    this.updatepatient=this.formbuilder.group({
      PatientId:[''],
      PatientName:['',Validators.required],
      Dateofbirth:['',Validators.required],
      Status:['']
      })

    this.route.params.subscribe(params => {
      this.val = params['id']
    });
    console.log(this.val);
    debugger
    this.rs.getUpdatePatient(this.val).subscribe(data =>{
      this.id=data.id;
      this.PatientName=data.PatientName;
      this.Dateofbirth=data.Dateofbirth;
      this.Status=data.Status
      this.Patientuser=data;
    })
  }

  backtopatient():void{
    this.router.navigateByUrl('patientusermanagement');
   }

   updatepatientdata(id:number){
     debugger
    this.rs.updatepatient(id,this.updatepatient.value).subscribe(res =>{
      alert("Patient details update successfully...!")
      this.updatepatient.reset();
      this.navigation.navigateByUrl('patientusermanagement');
      },err=>{
       alert("Somthing went wrong...!")
      })
   }

}

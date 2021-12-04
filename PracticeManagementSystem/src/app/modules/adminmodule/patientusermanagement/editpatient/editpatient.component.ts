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
    EmpID:number=0;
    Name:string="";
    DateofJoining:Date=new Date();
    Status:string="";
    EditStatus:string="";
    emailid:string="";
    Manage:string="";


  constructor(private formbuilder:FormBuilder,private route: ActivatedRoute, private router: Router, private rs:PatientService,private navigation:Router ) { 
    
  }

  val: any;
  Patientuser!:PatientUser
  
  ngOnInit(): void {
    this.updatepatient=this.formbuilder.group({
      PatientId:[''],
      PatientName:['',Validators.required],
      DateofJoining:['',Validators.required],
      number:['',Validators.required]
      })

    this.route.params.subscribe(params => {
      this.val = params['id']
    });
    console.log(this.val);
    debugger
    this.rs.getUpdatePatient(this.val).subscribe(data =>{
      this.id=data.id;
      // this.Name=data.Name;
      // this.DateofJoining=data.DateofJoining;
      // this.Status=data.Status;
      this.Patientuser=data;
    })
  }

  backtopatient():void{
    this.router.navigateByUrl('hospitalusermanagement');
   }

   updatepatientdata(id:number){
     debugger
    this.rs.updatepatient(id,this.updatepatient.value).subscribe(res =>{
      alert("Phaysician details update successfully...!")
      this.updatepatient.reset();
      this.navigation.navigateByUrl('hospitalusermanagement');
      },err=>{
       alert("Somthing went wrong...!")
      })
   }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalmanagementService } from 'src/app/hospitalmanagement.service';
import { Hospitalusers } from 'src/app/models/Hospitalusers';
import{FormGroup, FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  public updatephysician!:FormGroup;

    id:number=0;
    EmpID:number=0;
    Name:string="";
    DateofJoining:Date=new Date();
    Status:string="";
    EditStatus:string="";
    emailid:string="";
    Manage:string="";
    number:number=0;

  constructor(private formbuilder:FormBuilder,private route: ActivatedRoute, private router: Router, private rs:HospitalmanagementService,private navigation:Router ) { }
  val: any;
  Hospitaluser!:Hospitalusers
  
  ngOnInit(): void {
   

    this.route.params.subscribe(params => {
      this.val = params['id']
    });
    console.log(this.val);
    debugger
    this.rs.getUpdateUser(this.val).subscribe(data =>{
      this.id=data.id;
      this.Name=data.Name;
      this.DateofJoining=data.DateofJoining;
      this.number=data.number;
      this.Status=data.Status;
      this.Hospitaluser=data;
    })

    this.updatephysician=this.formbuilder.group({
      EmpID:[''],
      Name:['',Validators.required],
      DateofJoining:['',Validators.required],
      Status:['']
      })
  }
  backtophysicain():void{
    this.router.navigateByUrl('hospitalusermanagement');
   }
   updatephyasicaindata(id:number){
     debugger
    this.rs.updateusers(id,this.updatephysician.value).subscribe(res =>{
      alert("Phaysician details update successfully...!")
      this.updatephysician.reset();
      this.navigation.navigateByUrl('hospitalusermanagement');
      },err=>{
       alert("Somthing went wrong...!")
      })
   }

}

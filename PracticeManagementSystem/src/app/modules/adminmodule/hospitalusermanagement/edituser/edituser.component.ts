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
    Manage:string="";
  constructor(private route: ActivatedRoute, private router: Router, private rs:HospitalmanagementService ) { 
    
  }
  val: any;
  Hospitaluser:any[]=[];
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.val = params['id']
    });
    console.log(this.val);
    debugger
    this.rs.getUpdateUser(this.val).subscribe(data =>{
      this.EmpID=data.EmpID;
      this.Name=data.Name;
      this.DateofJoining=data.DateofJoining;
      this.Status=data.Status;
    })
  }

  backtophysicain():void{
    this.router.navigateByUrl('hospitalusermanagement');
   }

}

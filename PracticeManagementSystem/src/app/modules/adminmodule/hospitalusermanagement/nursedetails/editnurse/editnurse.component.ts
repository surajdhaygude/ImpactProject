import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NursemanagementService } from 'src/app/nursemanagement.service';

@Component({
  selector: 'app-editnurse',
  templateUrl: './editnurse.component.html',
  styleUrls: ['./editnurse.component.css']
})
export class EditnurseComponent implements OnInit {

  public updateNurse!:FormGroup;
  id:number=0;
  EmpID:number=0;
  Name:string="";
  DateofJoining:Date=new Date();
  Status:string="";
  EditStatus:string="";
  Manage:string="";
  number:number=0;

  constructor(private route: ActivatedRoute, private router: Router,
    private editservice:NursemanagementService
    ) { }

    val: any;
    HospitalNurseuser:any[]=[];
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.val = params['id']
      });
      console.log(this.val);
      debugger
      this.editservice.HNurseupdapte(this.val).subscribe(data =>{
        this.EmpID=data.EmpID;
        this.Name=data.Name;
        this.DateofJoining=data.DateofJoining;
        this.number=data.number;
      })
    }
  
      backtoNurse():void{
        this.router.navigateByUrl('nursedetails');
      }
  

}

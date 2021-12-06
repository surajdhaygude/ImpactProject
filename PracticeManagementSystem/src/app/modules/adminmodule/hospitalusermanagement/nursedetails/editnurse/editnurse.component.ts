import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NursemanagementService } from 'src/app/nursemanagement.service';
import{FormGroup, FormBuilder,Validators} from '@angular/forms'


@Component({
  selector: 'app-editnurse',
  templateUrl: './editnurse.component.html',
  styleUrls: ['./editnurse.component.css']
})
export class EditnurseComponent implements OnInit {

  public updatenurseform!:FormGroup;
  id:number=0;
  EmpID:number=0;
  Name:string="";
  DateofJoining:Date=new Date();
  Status:string="";
  EditStatus:string="";
  Manage:string="";
  number:number=0;

  constructor(private route: ActivatedRoute, private router: Router,
    private editservice:NursemanagementService,private formbuilder:FormBuilder
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
        this.id=data.id;
        this.Name=data.Name;
        this.DateofJoining=data.DateofJoining;
        this.Status=data.Status;
      })

      this.updatenurseform=this.formbuilder.group({
        EmpID:[''],
        Name:['',Validators.required],
        DateofJoining:['',Validators.required],
        Status:['']
        })
    }
  
      backtoNurse():void{
        this.router.navigateByUrl('nursedetails');
      }

      updatenursedata(id:number){
        this.editservice.updateNurseusers(id,this.updatenurseform.value).subscribe(res =>{
          alert("Nurse details update successfully...!")
          this.updatenurseform.reset();
          this.router.navigateByUrl('nursedetails');
          },err=>{
           alert("Somthing went wrong...!")
          })
       }
       
 }
  



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
  dateset:any="2021-11-08";


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
      this.editservice.GetnursebyID(this.val).subscribe(data =>{
        this.userId=data.userId;
        this.title=data.title;
        this.firstname=data.firstname;
        this.lastname=data.lastname;
        this.emailId=data.emailId;
        this.dob=data.dob;
        this.doj=data.doj;
        this.status=data.status;
      })

      this.updatenurseform=this.formbuilder.group({
        title:[''],
        userId:[''],
        firstname:['',Validators.required],
        lastname:['',Validators.required],
        emailId:['',[Validators.required, Validators.email]],
        dob:['',Validators.required],
        doj:['',Validators.required],
        status:['',Validators.required]
        })
    }
  
      backtoNurse():void{
        this.router.navigateByUrl('nursedetails');
      }
      get f() {

        return this.updatenurseform?.controls;
    
      }
      employeeid:any=""
      updatenursedata(){
        this.employeeid=this.userId;
        debugger
        this.f.userId.setValue(this.employeeid);
        this.editservice.updateNurseusers(this.updatenurseform.value).subscribe(res =>{
          alert("Nurse details update successfully...!")
          this.updatenurseform.reset();
          this.router.navigateByUrl('nursedetails');
          },err=>{
           alert("Somthing went wrong...!")
          })
       }
       
 }
  



import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalmanagementService } from 'src/app/hospitalmanagement.service';
import { Hospitalusers } from 'src/app/models/Hospitalusers';
import{FormGroup, FormBuilder,Validators} from '@angular/forms'
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  public updatephysician!:FormGroup;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
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

  constructor(private formbuilder:FormBuilder,private notifyService : NotificationService,private route: ActivatedRoute, private router: Router, private rs:HospitalmanagementService,private navigation:Router ) { }
  val: any;
  Hospitaluser!:Hospitalusers
  
  ngOnInit(): void {


    this.route.params.subscribe(params => {
      this.val = params['id']
    });
    console.log(this.val);

    this.rs.getUserByID(this.val).subscribe(data =>{
      debugger
      this.userId=data.userId;
      this.title=data.title;
      this.firstname=data.firstname;
      this.lastname=data.lastname;
      this.emailId=data.emailId;
      this.dob=data.dob;
      this.doj=data.doj;
      this.status=data.status;
      this.Hospitaluser=data;

    })



    this.updatephysician=this.formbuilder.group({
      userId:[''],
      title:[''],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      emailId:['',[Validators.required, Validators.email]],
      dob:['',Validators.required],
      doj:['',Validators.required],
      status:['',Validators.required]
      })
  }
  backtophysicain():void{
    this.router.navigateByUrl('hospitalusermanagement');
   }

   get f() {

    return this.updatephysician?.controls;

  }
  employeeid:any=""
   updatephyasicaindata(){
    this.employeeid=this.userId;
     debugger
     this.f.userId.setValue(this.employeeid);
      this.rs.updateusers(this.updatephysician.value).subscribe(res =>{
      // alert("Phaysician details update successfully...!")
      this.notifyService.showSuccess("Phaysician details update successfully...!", "Success");
      this.updatephysician.reset();
      this.navigation.navigateByUrl('hospitalusermanagement');
      },err=>{
      //  alert("Somthing went wrong...!")
       this.notifyService.showError("Something went wrong  ...!", "Error");
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

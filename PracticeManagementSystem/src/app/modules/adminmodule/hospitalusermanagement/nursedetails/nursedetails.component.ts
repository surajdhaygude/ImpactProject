import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/authservices.service';
import { NursemanagementService } from 'src/app/nursemanagement.service';

@Component({
  selector: 'app-nursedetails',
  templateUrl: './nursedetails.component.html',
  styleUrls: ['./nursedetails.component.css']
})
export class NursedetailsComponent implements OnInit {

  constructor(private nurseservice:NursemanagementService,private route:Router,private service:AuthservicesService) { }

  firstname:any;
  p:number=1;
  Managelist:any[]=["Active","Deactivate","Block"]
  NurseUser:any[]=[];


  ngOnInit(): void {
  debugger
    this.nurseservice.GetHospitalNurse().subscribe(data =>{
      this.NurseUser=data;
      
    });
  
  }
  
  search(){
    if(this.firstname== ""){
      this.ngOnInit()
    }else{
      this.NurseUser=this.NurseUser.filter(res =>{
        return res.firstname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
      })
    }
  
  }
  
  key: string ='EmpID';
  reverse:boolean=false;
  sort(key: string){
    this.key=key;
    this.reverse=!this.reverse;
  }
  
  AddNurserecords():void{
   this.route.navigateByUrl('createnurse');
  }
  
  DispayNurseGrid():void{
    this.route.navigateByUrl('nursedetails');
   }
  
   DispayPhysicainGrid():void{
    this.route.navigateByUrl('hospitalusermanagement');
   }
  
   deletenurse(id:number){
     debugger
     if(confirm('Are you sure to delet nurse record?')){
      this.nurseservice.HNursedelete(id).subscribe(
        response => { });
        this.nurseservice.GetHospitalNurse().subscribe(data =>{
          this.NurseUser=data;
        });
     }
  
  }
  
  editnurse(id:number){
   this.route.navigate(['/editnurse',id]);
  }

  SignOut(){
    this.service.logout();
   this.route.navigateByUrl('');
  }

}

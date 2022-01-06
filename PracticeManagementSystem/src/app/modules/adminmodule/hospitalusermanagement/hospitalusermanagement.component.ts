import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { AuthservicesService } from 'src/app/authservices.service';
import { HospitalmanagementService } from 'src/app/hospitalmanagement.service';



@Component({
  selector: 'app-hospitalusermanagement',
  templateUrl: './hospitalusermanagement.component.html',
  styleUrls: ['./hospitalusermanagement.component.css']
})
export class HospitalusermanagementComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private hospitaluser:HospitalmanagementService, private route:Router,private service:AuthservicesService) { }
  firstname:any;
  p:number=1;
  Managelist:any[]=["Active","Deactivate","Block"]
//   columnDefs: ColDef[] = [
//     {headerName:"Employee ID", field: 'EmpID' },
//     { headerName:"Name",field: 'Name' },
//     { headerName:"Date Of Joining",field: 'DateofJoining'},
//     {headerName:"Status", field: 'Status'},
//     { headerName:"Edit Status ",field: 'EditStatus'},
//     {headerName:"Manage", field: 'EmpID'}
// ];
  // defaultColDef={
  //  sortable:true
  // }

 

rowData:any[]=[];

  ngOnInit(): void {
    debugger
    this.hospitaluser.GetHospitalUsers().subscribe(data =>{
      this.rowData=data;
    });
    
  }

  search(){

    if(this.firstname== ""){

      this.ngOnInit()
    }else{
      this.rowData=this.rowData.filter(res =>{
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

  Addphysicianrecord():void{
   this.route.navigateByUrl('createuser');
  }

  DispayNurseGrid():void{
    this.route.navigateByUrl('nursedetails');
   }

   DispayPhysicainGrid():void{
    this.route.navigateByUrl('hospitalusermanagement');
   }

   deleteuser(id:number){

    if(confirm('Are you want to delete physician record?')){
      debugger
      this.hospitaluser.Husersdelete(id).subscribe(res =>{
        this.hospitaluser.GetHospitalUsers().subscribe(data =>{
          this.rowData=data;
        });
      });
     
    }
   
  }

  edituser(id: number){
    this.route.navigate(['/edituser', id]);
  }
// rowData = [
//     { EmpID: '1001', Name: 'Rajesh Sharma', DateofJoining: "2000/11/30", EditStatus:"Active", Manage:""},
//     { EmpID: '1002', Name: 'Rohit pawar', DateofJoining: "2003/09/12", EditStatus:"Active", Manage:""},
//     { EmpID: '1004', Name: 'Akash patil', DateofJoining: "2018/10/22", EditStatus:"Dectivate", Manage:""},
//     { EmpID: '1005', Name: 'Rupesh Sharma', DateofJoining: "2003/07/21", EditStatus:"Active", Manage:""},
//     { EmpID: '1006', Name: 'Raj', DateofJoining: "2007/09/14", EditStatus:"Block", Manage:""},
// ];

SignOut(){
  this.service.logout();
 this.route.navigateByUrl('');
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


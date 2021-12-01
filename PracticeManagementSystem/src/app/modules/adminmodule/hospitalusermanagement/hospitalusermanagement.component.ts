import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { HospitalmanagementService } from 'src/app/hospitalmanagement.service';



@Component({
  selector: 'app-hospitalusermanagement',
  templateUrl: './hospitalusermanagement.component.html',
  styleUrls: ['./hospitalusermanagement.component.css']
})
export class HospitalusermanagementComponent implements OnInit {

  constructor(private hospitaluser:HospitalmanagementService, private route:Router) { }
  Name:any;
  p:number=1;
  Managelist:any[]=["Active","Deactivate","Block"]
  columnDefs: ColDef[] = [
    {headerName:"Employee ID", field: 'EmpID' },
    { headerName:"Name",field: 'Name' },
    { headerName:"Date Of Joining",field: 'DateofJoining'},
    {headerName:"Status", field: 'Status'},
    { headerName:"Edit Status ",field: 'EditStatus'},
    {headerName:"Manage", field: 'EmpID'}
];
  defaultColDef={
   sortable:true
  }

 

rowData:any[]=[];

  ngOnInit(): void {
    debugger
    this.hospitaluser.GetHospitalUsers().subscribe(data =>{
      this.rowData=data;
    });
    
  }

  search(){
    if(this.Name== ""){
      this.ngOnInit()
    }else{
      this.rowData=this.rowData.filter(res =>{
        return res.Name.toLocaleLowerCase().match(this.Name.toLocaleLowerCase());
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
     debugger
    this.hospitaluser.Husersdelete(id)
    .subscribe(
      response => {
        debugger
        this.hospitaluser.GetHospitalUsers().subscribe(data =>{
          this.rowData=data;
        });
      },
      error => {
        console.log(error);
      });
  }
// rowData = [
//     { EmpID: '1001', Name: 'Rajesh Sharma', DateofJoining: "2000/11/30", EditStatus:"Active", Manage:""},
//     { EmpID: '1002', Name: 'Rohit pawar', DateofJoining: "2003/09/12", EditStatus:"Active", Manage:""},
//     { EmpID: '1004', Name: 'Akash patil', DateofJoining: "2018/10/22", EditStatus:"Dectivate", Manage:""},
//     { EmpID: '1005', Name: 'Rupesh Sharma', DateofJoining: "2003/07/21", EditStatus:"Active", Manage:""},
//     { EmpID: '1006', Name: 'Raj', DateofJoining: "2007/09/14", EditStatus:"Block", Manage:""},
// ];

}

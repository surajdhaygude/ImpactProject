import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/authservices.service';

@Component({
  selector: 'app-physiciandashboard',
  templateUrl: './physiciandashboard.component.html',
  styleUrls: ['./physiciandashboard.component.css']
})
export class PhysiciandashboardComponent implements OnInit {

  constructor(private route:Router,private service:AuthservicesService) { }

  ngOnInit(): void {
  }

  SignOut(){
    this.service.logout();
   this.route.navigateByUrl('');
  }
  

}

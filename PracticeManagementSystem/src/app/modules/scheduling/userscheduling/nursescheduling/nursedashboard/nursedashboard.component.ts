import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/authservices.service';

@Component({
  selector: 'app-nursedashboard',
  templateUrl: './nursedashboard.component.html',
  styleUrls: ['./nursedashboard.component.css']
})
export class NursedashboardComponent implements OnInit {

  constructor(private route:Router,private service:AuthservicesService) { }

  ngOnInit(): void {
  }
  SignOut(){
    this.service.logout();
   this.route.navigateByUrl('');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/authservices.service';

@Component({
  selector: 'app-sidenavuser',
  templateUrl: './sidenavuser.component.html',
  styleUrls: ['./sidenavuser.component.css']
})
export class SidenavuserComponent implements OnInit {

  constructor(private route:Router,private service:AuthservicesService) { }

  ngOnInit(): void {
  }
  SignOut(){
    this.service.logout();
   this.route.navigateByUrl('');
  }
}
